import React from 'react'

const shopping = ({title,desc,price,imageurl}) => {
  return (
    // MAIN bg-[#F4B251]
    <div className="card h-64 w-3/5 flex bg-black rounded-3xl">
      {/* LEFT SIDE */}
      <div className="left bg-gray-200 m-4 w-2/5 overflow-hidden rounded-xl flex items-center">
        <img src={imageurl} alt="" className="w-full" />
      </div>

      {/* RIGHT-SIDE */}
      <div className="r my-4 px-6 text-left w-3/4 text-white">
        <h1 className="text-4xl font-semibold">
          {title} <span className='font-thin'>&#8482;</span>
        </h1>
        <p className="text-xs py-3 mb-2">{desc}</p>
        <div className="w-24 border-b-4 border-white"></div>

        {/* LOWEST */}
        <div className="flex justify-between pr-2 py-3 font-sans font-semibold">
          <p className="">{price} /- PKR</p>
          <button className="capitalize bg-white text-black p-1 rounded-md">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default shopping