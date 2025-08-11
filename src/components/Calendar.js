import React, { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import { useEvents } from '../hooks/useEvents';
import EventModal from './EventModal';
import EventForm from './EventForm';
import { useTheme } from '../hooks/useTheme';

// Use date-fns for localization
const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarContainer = styled.div`
  height: 80vh;
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 2px 10px var(--shadow-color);
`;

const ViewToggle = styled.div`
  display: flex;
  margin-bottom: 15px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  width: fit-content;
`;

// Using $isActive as a transient prop (won't be passed to DOM)
const ViewButton = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.$isActive ? 'var(--primary-color)' : 'var(--button-secondary-bg)'};
  color: ${props => props.$isActive ? 'var(--button-primary-text)' : 'var(--button-secondary-text)'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.$isActive ? 'var(--primary-color)' : 'var(--hover-color)'};
  }
`;

const Calendar = () => {
  const [view, setView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();
  const { darkMode } = useTheme(); // Used for theme-aware styling

  // Format events for react-big-calendar
  const formattedEvents = events.map(event => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }));

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setShowEventForm(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleEventFormSubmit = (eventData) => {
    addEvent(eventData);
    setShowEventForm(false);
  };

  const handleEventUpdate = (updatedEvent) => {
    updateEvent(updatedEvent);
    setShowEventModal(false);
    setSelectedEvent(null);
  };

  const handleEventDelete = (eventId) => {
    deleteEvent(eventId);
    setShowEventModal(false);
    setSelectedEvent(null);
  };

  const closeEventModal = () => {
    setShowEventModal(false);
    setSelectedEvent(null);
  };

  const closeEventForm = () => {
    setShowEventForm(false);
  };

  return (
    <CalendarContainer className={darkMode ? 'dark-theme' : ''}>
      <ViewToggle>
        <ViewButton 
          $isActive={view === 'month'} 
          onClick={() => setView('month')}
        >
          Grid View
        </ViewButton>
        <ViewButton 
          $isActive={view === 'agenda'} 
          onClick={() => setView('agenda')}
        >
          List View
        </ViewButton>
      </ViewToggle>

      <BigCalendar
        localizer={localizer}
        events={formattedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        view={view}
        onView={setView}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={() => ({
          style: {
            backgroundColor: 'var(--event-color)',
            color: 'var(--event-text-color)',
            border: 'none',
          },
        })}
      />

      {showEventForm && (
        <EventForm
          selectedDate={selectedDate}
          onSubmit={handleEventFormSubmit}
          onCancel={closeEventForm}
        />
      )}

      {showEventModal && selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={closeEventModal}
          onUpdate={handleEventUpdate}
          onDelete={handleEventDelete}
        />
      )}
    </CalendarContainer>
  );
};

export default Calendar;