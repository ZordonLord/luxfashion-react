import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography>
          <h1>О нас</h1>
        </Typography>
        <Typography variant="body1" paragraph>
          Тут текст про нас.
        </Typography>
        <Typography variant="body1">
          Вернуться на <Link to="/" style={{ color: '#1976d2', textDecoration: 'none' }}>главную страницу</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage; 