import React from 'react'
import { useState } from 'react';
const Counter = () => {
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

    <div>
        <h1>Counter</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={add}>add +</button>
        <button onClick={remove}>remove -</button>
      </div>
      <button onClick={reset}>reset </button>
    </div>
  )
}

export default Counter