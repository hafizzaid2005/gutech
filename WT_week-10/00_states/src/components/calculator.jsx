import React, { use } from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [num,setNum] = useState()
    const [num2,setNum2] = useState()
    const [addition,setAdd] = useState()
    const [sub, setSub] = useState();
    const [mult,setMult] = useState()
    const [divid,setDivid] = useState()

    const add = ()=>{
        setAdd(Number(num) + Number(num2));
    }
    const subtract = ()=>{
        setSub(Number(num) - Number(num2));
    }
    const multiply = ()=>{
        setMult(Number(num) * Number(num2));
    }
    const divide = ()=>{
        setDivid(Number(num) / Number(num2));
    }
    return (
      <div>
        <h1>Calculator</h1>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div>
          <button onClick={add}>add</button>
          <button onClick={subtract}>subtract</button>
          <button onClick={multiply}>multiply</button>
          <button onClick={divide}>divide</button>
        </div>
        <h5>addition: {addition}</h5>
        <h5>subtract :{sub}</h5>
        <h5>multiply: {mult}</h5>
        <h5>divide :{divid}</h5>
      </div>
    );
}

export default Calculator