import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
const ProductDetail = () => {
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const newProduct = { id, name: `Product ${id}`, price: 100 };
    setCart([...cart, newProduct]);
    alert(`${newProduct.name} has been added to the cart.`);
  };

  return (
    <div>
      <h1>Product {id}</h1>
      <p>Price: $100</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
