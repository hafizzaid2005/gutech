import React , {useState} from 'react'


const Calculator = () => { 
    const[num1,setnum1] = useState()
    const[num2,setnum2] = useState()
    const[addd,setAdd] = useState()
    const[sub,setsub] = useState()
    const[multt,setmult] = useState ()
    const[divid,setDivid] = useState ()
    
    function subtract (){
        setsub(Number(num1)-Number(num2))
    }

    function multiply () {
        setmult(Number(num1)*Number(num2))
    }
    function add (){
        setAdd(Number(num1)+Number(num2))
    }
    function divide (){
        setAdd(Number(num1)/Number(num2))
    }
  return (
    <div>
        <h1>Calculator</h1>
        <input type="number" placeholder='enter first number' value = {num1} onChange={(e)=>setnum1(e.target.value)}/>
        <input type="number" placeholder='enter second number' value = {num2} onChange={(e)=>setnum2(e.target.value)}/>
        <button onClick={add}>add</button>
        <button onClick={multiply}>mult</button>
        <button onClick={subtract}>sub</button>
        <button onClick={divide}>divide</button>
        <h2>{addd}</h2>
        <h2>{sub}</h2>
        <h2>{multt}</h2>
        <h2>{divid}</h2>
        
    </div>
  )
}

export default Calculator;