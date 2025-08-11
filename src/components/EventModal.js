import React, { useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--modal-background);
  color: var(--modal-text-color);
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px var(--shadow-color);
`;

const EventDetails = styled.div`
  margin-bottom: 20px;
`;

const EventTitle = styled.h2`
  margin-bottom: 15px;
  color: var(--primary-color);
`;

const EventInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
`;

const InfoLabel = styled.span`
  font-weight: 500;
  min-width: 100px;
`;

const InfoValue = styled.span`
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const CloseButton = styled(Button)`
  background-color: var(--button-secondary-bg);
  color: var(--button-secondary-text);

  &:hover {
    background-color: var(--hover-color);
  }
`;

const EditButton = styled(Button)`
  background-color: var(--button-primary-bg);
  color: var(--button-primary-text);

  &:hover {
    opacity: 0.9;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #d93025;
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const EventModal = ({ event, onClose, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    ...event,
    start: format(new Date(event.start), "yyyy-MM-dd'T'HH:mm"),
    end: format(new Date(event.end), "yyyy-MM-dd'T'HH:mm"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      ...formData,
      start: new Date(formData.start).toISOString(),
      end: new Date(formData.end).toISOString(),
    });
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'MMMM dd, yyyy h:mm a');
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {isEditing ? (
          <>
            <h2>Edit Event</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="start">Start Time</Label>
                <Input
                  type="datetime-local"
                  id="start"
                  name="start"
                  value={formData.start}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="end">End Time</Label>
                <Input
                  type="datetime-local"
                  id="end"
                  name="end"
                  value={formData.end}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="location">Location</Label>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location || ''}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <TextArea
                  id="description"
                  name="description"
                  value={formData.description || ''}
                  onChange={handleChange}
                />
              </FormGroup>

              <ButtonGroup>
                <CloseButton type="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </CloseButton>
                <EditButton type="submit">Save Changes</EditButton>
              </ButtonGroup>
            </Form>
          </>
        ) : (
          <>
            <EventDetails>
              <EventTitle>{event.title}</EventTitle>
              
              <EventInfo>
                <InfoLabel>Start:</InfoLabel>
                <InfoValue>{formatDateTime(event.start)}</InfoValue>
              </EventInfo>
              
              <EventInfo>
                <InfoLabel>End:</InfoLabel>
                <InfoValue>{formatDateTime(event.end)}</InfoValue>
              </EventInfo>
              
              {event.location && (
                <EventInfo>
                  <InfoLabel>Location:</InfoLabel>
                  <InfoValue>{event.location}</InfoValue>
                </EventInfo>
              )}
              
              {event.description && (
                <EventInfo>
                  <InfoLabel>Description:</InfoLabel>
                  <InfoValue>{event.description}</InfoValue>
                </EventInfo>
              )}
            </EventDetails>
            
            <ButtonGroup>
              <DeleteButton onClick={() => onDelete(event.id)}>Delete</DeleteButton>
              <CloseButton onClick={onClose}>Close</CloseButton>
              <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
            </ButtonGroup>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default EventModal;