import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>О нас</h1>
      <p>Тут текст про нас.</p>
      <p>Вернуться на <Link to="/" style={{ color: '#1976d2', textDecoration: 'none' }}>главную страницу</Link></p>
    </div>
  );
};

export default AboutPage; 