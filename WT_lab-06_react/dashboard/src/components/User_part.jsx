import React from 'react'
import User from './User'
import Message from './Message'
import Stats from "./statistics"
import Userimg from '../assets/ahsanimg.jpg'
function User_part() {
    const user1={
        naam:"Ahsan Siddiqui",
        email:"ahsan@gmail.com",
        role:"Snr Software Engineer",
        profilePicture:Userimg
    }
    const messages={
      mess1:"System performance is running at optimal levels.",
      mess2:"You have 3 new updates available for your profile.",
      mess3:"Your last activity was 5 days ago.",
    }
    const stats = {
      t_usr:900,
      active_usr:450,
      new_usr:19,
      progress:(450/900)*100,
    }
  return (
    <div className='flex flex-col gap-20 mt-20'>
        <div className='flex justify-center gap-10'>
        <User user={user1}/>
        <Message message={messages}/>
        </div>
        <Stats stat={stats}/>
    </div>
  )
}

export default User_part