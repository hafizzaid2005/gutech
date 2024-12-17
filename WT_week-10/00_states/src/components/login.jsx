import React, { use } from 'react'
import { useState } from 'react'

const Login = () => {
    const [naam,setNaam] = useState('')
    const [age,setAge] = useState('')
    const [pass,setPass] = useState('')
    const [email,setEmail] = useState('')
  return (
    <div>
        <h1>Log-in</h1>
      <form action="">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setNaam(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
      <div>
      <p>name: {naam}</p>
      <p>password: {pass}</p>
      <p>email : {email}</p>
      <p>age : {age}yrs</p>
      </div>

    </div>
  );
}

export default Login