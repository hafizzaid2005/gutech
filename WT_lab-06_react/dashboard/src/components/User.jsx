import React from 'react'

const User = ({user}) => {
  return (
    <>
    <div className='user_card flex flex-col items-center gap-4 bg-white shadow-md h-80 w-2/5 p-3 rounded-lg hover:shadow-2xl hover:h-96 transition-all ease-in-out'>
        <img src={user.profilePicture} alt="" className='w-28 rounded-full' />
        <h2 className='text-5xl font-bold '>{user.naam} </h2>
        <h2 className='text-2xl font-semibold text-[#2277ff]'>{user.role}</h2>
        <h2 className='text-xl'>{user.email}</h2>
    </div>
     </>
  )
}

export default User