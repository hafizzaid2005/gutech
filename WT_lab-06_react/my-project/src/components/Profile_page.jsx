import React from 'react'
import Greetings from './Profile_card'
const Profile_page = () => {
  return (
    <div className="h-screen bg-white flex flex-col justify-around">
      <div className="self-center">
        <h1 className="text-3xl font-bold uppercase pb-2">Instructor profile</h1>
        <div className=" w-20 border-b-4 border-[#103091]"></div>
      </div>
      <div className="flex justify-around items-center ">
        <Greetings
          name="Arif zaman"
          occup="Full stack Developer"
          age={3}
          location="Devsinc"
        />
        <Greetings
          name="Kamran shaikh"
          occup="Nodejs Developer"
          age={2}
          location="Systems Limited"
        />
        <Greetings
          name="Shoaib sawal"
          occup="Snr Software Engineer"
          age="5+"
          location="Folio 3"
        />
      </div>
    </div>
  );
}

export default Profile_page