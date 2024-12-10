import React from 'react'

const Reuse = ({user_data}) => {
  return (
    <div className="card w-64 h-56 bg-white text-black rounded flex flex-col items-center">
      <h1>card hoon</h1>
      <img src={user_data.pfp} alt="" className="w-20 rounded-full" />
      <h1>{user_data.naam}</h1>
      <p>{user_data.class}</p>
      <p>{user_data.programm}</p>
    </div>
  );
};

export default Reuse