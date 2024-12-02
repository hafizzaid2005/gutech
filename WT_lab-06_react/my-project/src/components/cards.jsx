import React from 'react'

const Card = ({ title = "title", desc, cto, btn, btn2 }) => {
  return (
    <div className="h-80 w-80 bg-white flex flex-col rounded-xl overflow-hidden shadow-md  hover:shadow-lg ">
      {/* TOP PART bg-[#3467FF]*/}
      <div className="top min-h-32 bg-[#103091] text-white rounded-br-md flex items-center pl-2 ">
        <h1 className="text-5xl font-semibold">{title}</h1>
      </div>

      {/* BOTTOM PART */}
      <div className="bottom h-2/4 flex flex-col justify-start p-2 gap-2">
        <h2 className="text-xl text-left font-semibold mt-4">{desc}</h2>
        <p className="text-left font-light">{cto}</p>
      </div>

      {/* BUTTON PART */}
      <div className="flex justify-start gap-5 pl-2">
        <button className="w-20 bg-black text-white rounded-md">{btn}</button>
        <button className="w-20 bg-black text-white rounded-md">{btn2}</button>
      </div>
    </div>
  );
};

export default Card