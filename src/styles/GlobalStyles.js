import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #1a73e8;
    --secondary-color: #4285f4;
    --background-color: #ffffff;
    --text-color: #202124;
    --border-color: #dadce0;
    --event-color: #4285f4;
    --event-text-color: #ffffff;
    --hover-color: #f1f3f4;
    --today-color: #1a73e8;
    --today-text-color: #ffffff;
    --header-background: #f1f3f4;
    --header-text-color: #202124;
    --modal-background: #ffffff;
    --modal-text-color: #202124;
    --button-primary-bg: #1a73e8;
    --button-primary-text: #ffffff;
    --button-secondary-bg: #f1f3f4;
    --button-secondary-text: #202124;
    --shadow-color: rgba(0, 0, 0, 0.1);
  }

  body.dark-theme {
    --primary-color: #8ab4f8;
    --secondary-color: #669df6;
    --background-color: #202124;
    --text-color: #e8eaed;
    --border-color: #5f6368;
    --event-color: #669df6;
    --event-text-color: #202124;
    --hover-color: #3c4043;
    --today-color: #8ab4f8;
    --today-text-color: #202124;
    --header-background: #3c4043;
    --header-text-color: #e8eaed;
    --modal-background: #2d2e30;
    --modal-text-color: #e8eaed;
    --button-primary-bg: #8ab4f8;
    --button-primary-text: #202124;
    --button-secondary-bg: #3c4043;
    --button-secondary-text: #e8eaed;
    --shadow-color: rgba(0, 0, 0, 0.5);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
  }

  /* Calendar specific styles */
  .rbc-calendar {
    background-color: var(--background-color);
    color: var(--text-color);
    border-radius: 8px;
    overflow: hidden;
  }

  .rbc-header {
    background-color: var(--header-background);
    color: var(--header-text-color);
    padding: 10px;
    font-weight: 500;
  }

  .rbc-event {
    background-color: var(--event-color);
    color: var(--event-text-color);
    border-radius: 4px;
    padding: 2px 5px;
    font-size: 0.85em;
  }

  .rbc-today {
    background-color: var(--hover-color);
  }

  .rbc-day-slot .rbc-event {
    border: none;
  }

  .rbc-toolbar button {
    background-color: var(--button-secondary-bg);
    color: var(--button-secondary-text);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    padding: 5px 10px;
    margin: 0 2px;
    font-size: 0.9em;
  }

  .rbc-toolbar button.rbc-active {
    background-color: var(--button-primary-bg);
    color: var(--button-primary-text);
  }

  .rbc-month-view, .rbc-agenda-view {
    border: 1px solid var(--border-color);
    border-radius: 8px;
  }

  .rbc-month-row + .rbc-month-row, .rbc-day-bg + .rbc-day-bg {
    border-color: var(--border-color);
  }

  .rbc-off-range-bg {
    background-color: var(--hover-color);
    opacity: 0.3;
  }

  .rbc-agenda-empty {
    color: var(--text-color);
    background-color: var(--background-color);
    border-color: var(--border-color);
  }
`;

export default GlobalStyles;