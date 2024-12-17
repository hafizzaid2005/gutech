import React from 'react'
import { useState } from 'react';

const Cart = () => {
    let [mango, setMango] = useState(0);
    let [banana, setBanana] = useState(0);
    let [apple, setaApple] = useState(0);
    let [total, setTotal] = useState(0);
    const totall = ()=>{
      setTotal(total=(mango*10) + (banana*20) + (apple*15));
    }
    let mangoTotal = mango*10; 
    let bananaTotal = banana*20; 
    let appleTotal = apple*15; 
  return (
    <div>
      <h1>Cart</h1>
      <h5>
        Mangoes(10rs):{mango} | Total={mangoTotal}
      </h5>
      <h5>Bananas(20rs):{banana} | Total={bananaTotal}</h5>
      <h5>Apples(15rs):{apple} | Total={appleTotal}</h5>
      <h4>Total: {total} rs</h4>

      <button onClick={() => setMango(mango + 1)}>add 🥭 Mango</button>
      <button onClick={() => setBanana(banana + 1)}>add 🍌 Banana</button>
      <button onClick={() => setaApple(apple + 1)}>add 🍎 Apple</button>

      <button onClick={() => setMango(mango > 0 ? mango - 1 : (mango = 0))}>
        remove 🥭 Mango
      </button>
      <button onClick={() => setBanana(banana > 0 ? banana - 1 : (banana = 0))}>
        remove 🍌 Banana
      </button>
      <button onClick={() => setaApple(apple ? apple - 1 : (apple = 0))}>
        remove 🍎 Apple
      </button>
      <button onClick={totall}>total</button>
    </div>
  );
}
export default Cart