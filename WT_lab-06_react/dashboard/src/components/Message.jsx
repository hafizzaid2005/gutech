import React from 'react'

const Message = ({message}) => {
  return (
    <div className='user_card flex flex-col justify-center items-start gap-3 bg-white text-white shadow-xl rounded-lg w-1/3 h-80 pl-5 hover:shadow-2xl hover:h-96 transition-all ease-in-out'>
      <h1 className='text-3xl text-black text-center font-bold'>Messages</h1>
      <h1 className='bg-[#2277ff] p-2 rounded-md hover:p-3 transition-all ease-in-out hover:cursor-pointer hover:ml-2' >{message.mess1}</h1>
      <h1 className='bg-[#2277ff] p-2 rounded-md hover:p-3 transition-all ease-in-out hover:cursor-pointer hover:ml-2'>{message.mess2}</h1>
      <h1 className='bg-[#2277ff] p-2 rounded-md hover:p-3 transition-all ease-in-out hover:cursor-pointer hover:ml-2'>{message.mess3}</h1>
    </div>
  )
}

export default Message