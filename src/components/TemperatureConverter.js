import React, { useState } from 'react';
import { TextField, Container, Typography } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
      return;
    }
    const celsiusValue = parseFloat(value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
      return;
    }
    const fahrenheitValue = parseFloat(value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    setCelsius(celsiusValue.toFixed(2));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom>
        Конвертер температур
      </Typography>
      <TextField
        label="Цельсий"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        fullWidth
        margin="normal"
        InputProps={{
          inputProps: { step: "0.1" }
        }}
      />
      <TextField
        label="Фаренгейт"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        fullWidth
        margin="normal"
        InputProps={{
          inputProps: { step: "0.1" }
        }}
      />
    </Container>
  );
};

export default TemperatureConverter; 