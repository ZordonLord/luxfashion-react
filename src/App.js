import React from 'react';
import './App.css';
import CommentsList from './components/CommentsList';
import Message from './components/Message';
import TemperatureConverter from './components/TemperatureConverter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Message text="Привет, это мой первый компонент Message!" />
        <CommentsList />
        <TemperatureConverter />
      </div>
    </ThemeProvider>
  );
}

export default App;
