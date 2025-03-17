import React from 'react';
import './App.css';
import CommentsList from './components/CommentsList';
import Message from './components/Message';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

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
      <Router>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Тестовый сайт
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Главная
              </Button>
              <Button color="inherit" component={Link} to="/about">
                О нас
              </Button>
            </Toolbar>
          </AppBar>

          <Container>
            <Routes>
              <Route path="/" element={
                <>
                  <HomePage />
                  <Message text="Привет, это мой первый компонент Message!" />
                  <CommentsList />
                  <TemperatureConverter />
                  <TodoList />
                </>
              } />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
