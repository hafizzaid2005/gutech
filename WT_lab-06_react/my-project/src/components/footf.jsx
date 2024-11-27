import React from 'react'
import { SiGoogleforms } from "react-icons/si";
const Foot = () => {
  return (
    <div className="w-full flex flex-col justify-between border-t-2 py-4 px-8 h-96 ">
      {/* HEADING */}
      <div className="flex items-center justify-center gap-2">
        <SiGoogleforms className="text-xl" />
        <h1 className="text-4xl font-bold">Connect with us </h1>
      </div>

      {/* FORM */}
      <form action="" className="flex flex-col gap-8">
        {/* PART-1 */}
        <div className='flex justify-center gap-32'>
        <input
          className="rounded-md p-1 bg-black text-white placeholder-white"
          type="text"
          placeholder="name"
        />
        <input
          className="rounded-md p-1 bg-black text-white placeholder-white"
          type="email"
          placeholder="@mail"
        />
        </div>

        {/* PART-2 */}
        <div className='flex justify-center gap-32'>
        <input
          className="rounded-md p-1 bg-black text-white placeholder-white"
          type="number"
          placeholder="phone no."
        />
        <input
          className="rounded-md p-1 bg-black text-white placeholder-white"
          type="number"
          placeholder="phone no."
        />
        </div>

      </form>
        {/* BUTTON */}
        <div>
        <button className="bg-black text-white rounded-md w-20">
          Submit
        </button>
        </div>
    </div>
  );
}

export default Foot