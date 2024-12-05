
import React from "react";
import './component/productcard.css';
import "./component/productcard";

const App = () => {
  return (
    <div>
      <ProductCard 
        name="Zain" 
        age={20} 
        occupation="Student" 
        location="Pakistan" 
      />
    </div>
  );
};

const ProductCard = () => {
    return (
        <div className="app-container">
            <ProductCard
                title="Wireless Headphones"
                description="Noise-cancelling, over-ear headphones"
                price={199.99}
                imageUrl="https://www.daraz.pk/headphones-headsets"/>
            
        </div>
    );
};

export default App;
