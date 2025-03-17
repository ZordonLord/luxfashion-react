import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography>
          <h1>Главная страница</h1>
        </Typography>
        <Typography variant="body1">
          Добро пожаловать на наш сайт!
        </Typography>
        <Typography variant="body1">
          Перейти на страницу <Link to="/about" style={{ color: '#1976d2', textDecoration: 'none' }}>О нас</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage; 