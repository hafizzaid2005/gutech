import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#E21B70] text-white border-b-2 border-black z-10 sticky top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">Logo</a>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-6">
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
          <a
            href="#contactus"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Contact Us
          </a>
          <a
            href="#aboutus"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar