# React Calendar Application

A modern, responsive calendar application built with React that allows users to manage events and toggle between light and dark themes.

![Calendar App Screenshot](https://via.placeholder.com/800x450.png?text=Calendar+App+Screenshot)

## Features

- **Interactive Calendar Interface**: Using `react-big-calendar` with proper date-fns localization
- **Theme Support**: Toggle between light and dark modes with persistent preferences
- **Event Management**: Create, view, edit, and delete calendar events
- **Multiple Views**: Grid (month) and List (agenda) views for different ways to visualize events
- **Responsive Design**: Clean, modern UI with styled-components
- **Local Storage**: Events and theme preferences persist between sessions

## AI Declaration

The following features in this project were built entirely with the assistance of AI tools:

- **Dark/Light Mode Toggle (ThemeContext)** – Implemented global theme management using React Context API. Integrated Tailwind CSS dark mode class handling with persistent user preferences stored in localStorage. The toggle functionality was designed to allow seamless switching between light and dark themes across the entire application.

## Technologies Used

- React
- react-big-calendar
- date-fns
- styled-components
- Local Storage API

## Project Structure

```
src/
├── components/       # UI components
├── contexts/         # React context providers
├── hooks/            # Custom React hooks
├── styles/           # Global styles
└── utils/            # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/calendar-app.git
   cd calendar-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser

## Usage

- **Adding Events**: Click on any date in the calendar to open the event creation form
- **Viewing Events**: Click on an existing event to view its details
- **Editing Events**: In the event details modal, click "Edit" to modify an event
- **Deleting Events**: In the event details modal, click "Delete" to remove an event
- **Changing Views**: Use the view toggle buttons to switch between Grid and List views
- **Toggling Theme**: Click the theme toggle button in the header to switch between light and dark modes

## License

MIT

## Acknowledgments

- [React](https://reactjs.org/)
- [react-big-calendar](https://github.com/jquense/react-big-calendar)
- [date-fns](https://date-fns.org/)
- [styled-components](https://styled-components.com/)
