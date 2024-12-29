import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <p><Link to="/product/1">View Product 1</Link></p>
      <p><Link to="/product/2">View Product 2</Link></p>
    </div>
  );
};

export default Home;
