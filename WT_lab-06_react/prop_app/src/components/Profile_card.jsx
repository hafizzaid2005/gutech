import React from 'react'
// import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
// import MyImage from "../assets/images/dp.png";
const greetings = ({name:naam,occup,location,age:umar}) => {
  return (
    <div className="card bg-[#f2f2f2] rounded-3xl overflow-hidden w-80 h-96 transition duration-500 ease-in-out hover:shadow-2xl hover:cursor-pointer ">
      <div className="top bg-[#F4C460] text-white h-32 flex justify-center items-end relative">
        <img
          src=""
          alt=""
          className="w-32 h-32 rounded-full absolute -bottom-10 border-2"
        />
      </div>

      {/* bottom */}
      <div className="px-7 flex flex-col  mt-11 justify-center items-center ">
        <h1 className="text-3xl font-semibold">{naam}</h1>
        <h1 className="text-md font-medium">{occup} </h1>
        <p>{location}</p>
        <h2 className="capitalize text-sm border-b-4 w-32 border-[#F4C460] pb-2">
          {umar}yrs
        </h2>
      </div>

      {/* bottom-2 */}
      <div className="mt-2 px-11">
        <p className="text-sm">
          As a Full Stack Developer, I specialize in building web applications.
        </p>
      </div>

      {/* ICONS */}
      <div className=" flex justify-center gap-5 text-xl text-[#1F1F1F] mt-5">
        {/* <FaFacebook />
        <FaInstagramSquare />
        <FaLinkedin /> */}
      </div>
    </div>
  );
}

export default greetings