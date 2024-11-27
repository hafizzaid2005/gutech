import React from 'react'
import { FaFacebook,FaInstagram,FaTwitterSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="bg-[#103091] w-full h-96">
        <div className='right flex justify-around w-full  text-white  px-32 pt-20'>
            <div className='logo'>
             <h1 className='text-6xl'>SKILL.</h1>
            </div>
            <div className='courses'>
              <h1 className='text-5xl'>courses</h1>
              <ul className='text-left'>
              <li>Computer Science</li>
              <li>Engineering</li>
              <li>Marketing</li>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              </ul>
            </div>

            <div className='uni'> 
              <h1 className='text-5xl capitalize'>Universities</h1>
              <ul className='text-left'>
              <li>LUMS</li>
              <li>IBA</li>
              <li>FAST</li>
              <li>KSBL</li>
              <li>GU Tech</li>
              </ul>
              </div>
            <div>
            <h1 className='text-5xl capitalize'>companies</h1>
              <ul className='text-left'>
              <li>Folio 3</li>
              <li>Devsinc</li>
              <li>System limites</li>
              <li>Geeks of Kolachi</li>
              <li>Humantek</li>
              </ul>
            </div>
      </div>
      <div className=' mt-20 flex justify-center gap-6 '>
      <FaFacebook className='text-white text-2xl'/>
      <CiLinkedin className='text-white text-2xl'/>
      <FaInstagram className='text-white text-2xl'/>
      <FaTwitterSquare className='text-white text-2xl'/>
      </div>
    </div>
  );
}
export default Footer