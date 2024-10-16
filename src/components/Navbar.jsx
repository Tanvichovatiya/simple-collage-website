import React from 'react'
import logo from '../assets/img/logo.jpeg'
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className='flex justify-between   max-[320px]:bg-red-200 items-center mt-3 bg-gray-200  py-3'>
        <img src={logo} alt="" className='w-12 h-12 ml-4 rounded-full max-[320px]:ml-2' />
        <div className='flex items-center  gap-3 '>
            <p className='flex items-center  max-[320px]:ml-[80px] gap-2 lg:mr-4'><FaPhone className='text-[30px] font-semibold'/><span>34576 47550</span> </p>
            <p className='flex items-center gap-2'><CiMail className='text-[30px] font-semibold'/><span>abc@gmail.com</span></p>
        </div>
    </div>

    <div className='flex items-center gap-7 justify-center py-4  mt-2 bg-blue-400'>
        <Link to='/' className='text-[25px] font-semibold text-orange-200'>Home</Link>
        <Link to='/event'  className='text-[25px] font-semibold text-orange-200'>Event & functions</Link>
        <Link to='/admissions'  className='text-[25px] font-semibold text-orange-200'>Admissions</Link>
        <Link to='/library'  className='text-[25px] font-semibold text-orange-200'>Library</Link>
        <Link to='/about'  className='text-[25px] font-semibold text-orange-200'>About us</Link>

    </div>
    </>
  )
}

export default Navbar
