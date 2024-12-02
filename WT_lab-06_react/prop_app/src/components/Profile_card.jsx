import React from 'react'
import MyImage from "../assets/images/skills.png";
const greetings = ({name:naam,occup,age:umar}) => {
  return (
    <div className='card bg-[#f2f2f2] shadow-lg rounded-3xl overflow-hidden w-80 h-80'>
      <div className='top bg-custom-blue text-white h-24'>
        <img src={MyImage} alt="" />
      </div>

      {/* bottom */}
      <div className='px-7 flex flex-col gap-1 justify-center items-center '>
        <h1 className='text-2xl font-semibold'>{naam}</h1>
        <h1 className='text-md font-medium'>{occup} </h1>
        <h2 className='capitalize text-sm border-b-4 w-32 border-custom-blue'>{umar}yrs</h2>
      </div>

      {/* bottom-2 */}
      <div className='mt-4'>
        <p className='text-sm'>As a Full Stack Developer, I specialize in building end-to-end web applications.</p>
      </div>
    </div>
  )
}

export default greetings