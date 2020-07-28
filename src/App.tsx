import React from 'react';
import './App.css';
import {ThemeProvider, Container} from '@material-ui/core';
import theme from './style/defaultTheme';
import FaleMaisForm from './pages/faleMaisForm';
import AppHeader from './components/appHeader';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppHeader label="Fale Mais">
          <Container>
            <FaleMaisForm label="Formulário"></FaleMaisForm>
          </Container>
        </AppHeader>
      </ThemeProvider>
    </div>
  );
}

export default App;
