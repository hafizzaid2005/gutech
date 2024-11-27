import React from 'react'
import { SiGoogleforms } from "react-icons/si";
const Foot = () => {
  return (
    <div className="w-full flex justify-between px-8">
      <div className="flex items-center gap-2">
        <SiGoogleforms className="text-xl" />
        <h1 className="text-2xl font-bold">Connect with us </h1>
      </div>
      <form action="" className="flex items-center justify-evenly gap-7">
        <input
          className="rounded-md p-1 bg-[#3467FF] text-white placeholder-white"
          type="text"
          placeholder="name"
        />
        <input
          className="rounded-md p-1 bg-[#3467FF] text-white placeholder-white"
          type="email"
          placeholder="@mail"
        />
        <input
          className="rounded-md p-1 bg-[#3467FF] text-white placeholder-white"
          type="number"
          placeholder="phone no."
        />
        <button className="bg-black text-white rounded-md px-4 py-1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Foot