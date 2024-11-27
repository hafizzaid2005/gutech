import React from 'react'
import Leftside from "./left"
import Right from "./right";
export function Landing() {
  return (
    <div className='flex justify-around items-center h-screen '>
      <Leftside/>
      <Right/>
    </div>
  );
}