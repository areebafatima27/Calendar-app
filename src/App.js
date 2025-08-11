import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { EventProvider } from './contexts/EventContext';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Calendar from './components/Calendar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <ThemeProvider>
      <EventProvider>
        <AppContainer>
          <GlobalStyles />
          <Header />
          <MainContent>
            <Calendar />
          </MainContent>
        </AppContainer>
      </EventProvider>
    </ThemeProvider>
  );
}

export default App;
