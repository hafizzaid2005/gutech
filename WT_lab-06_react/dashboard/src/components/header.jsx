import React from 'react' 
let userName = 'As'
const header = () => {
  return (
    <div className="navbar absolute flex justify-between items-center py-2 px-16 border w-full text-white bg-[#2277ff]">
      <div className="logo">
        <h1 className="text-white font-bold text-3xl">DASHBOARD</h1>
      </div>
      <div className="menu flex gap-6 text-lg items-center">
        <h3>Home</h3>
        <h3>Courses</h3>
        <h3>Companies</h3>
        <h3>Universities</h3>
      <div className="profile">
        <h3 className="bg-black text-white font-bold rounded-lg px-1 ">
          {userName}
        </h3>
      </div>
      </div>
    </div>
  );
}

export default header