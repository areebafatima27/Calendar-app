import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: var(--header-background);
  color: var(--header-text-color);
  box-shadow: 0 2px 5px var(--shadow-color);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-color);
`;

const ThemeToggle = styled.button`
  background-color: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--hover-color);
  }
`;

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Logo>
        <span role="img" aria-label="calendar">📅</span>
        Calendar App
      </Logo>
      <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
        {darkMode ? '☀️' : '🌙'}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;