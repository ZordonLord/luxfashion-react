import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Перейти на страницу <Link to="/about" style={{ color: '#1976d2', textDecoration: 'none' }}>О нас</Link></p>
    </div>
  );
};

export default HomePage;