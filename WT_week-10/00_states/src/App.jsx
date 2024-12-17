import logo from './logo.svg';
import { useState } from 'react';
import Calculator from './components/calculator';
import Login from './components/login';
import Cart from './components/cart';
import './App.css';

function App() {
let [count, setCount] = useState(0);

const add = ()=>{
  setCount( count + 1)
} 
const remove = ()=>{
  if (count> 0) {
    setCount( count - 1)
  }
} 
const reset = ()=>{
  setCount( count = 0)
} 
  return (
    <div className="App flex flex-col justify-center items-center">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={add}>add +</button>
        <button onClick={remove}>remove -</button>
      </div>
      <button onClick={reset}>reset </button>
      <hr />
      <Calculator />
      <hr />
      <Login />
      <hr />
      <Cart/>
    </div>
  );
}

export default App;
