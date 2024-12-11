import React from 'react'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart.png'

const Navbar = () => {
  return (
    <nav className="bg-[#8f160d] text-white  z-10 sticky top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl flex gap-4 font-bold items-center">
          <img src={logo} alt="" className='w-10 rounded-full' />
          <h1 className='capitalize text-xl font-medium'>kababjees fried chicken</h1>
        </div>
        {/* Navigation Links */}
        <div className="flex gap-4 items-center">
          <a
            href="#home"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Menu
          </a>
          <button className='flex items-center gap-2 bg-[#f7ba3f] text-[#8f160d] font-normal text-sm px-1 py-1 rounded-xl hover:p-2 transition-all ease-in-out'><img src={cart} alt="" className='w-4' />Order</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar