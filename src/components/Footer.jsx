import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-4 ml-3 mr-3 bg-neutral-700   '>
      <div className='flex flex-col gap-3 mt-5'>
        <p className='text-[20px] font-semibold text-slate-400 mb-3'>Quick links</p>
        <Link to='/' className='text-[17px]  text-slate-300 '>Home</Link>
        <Link to='/event' className='text-[17px]  text-slate-300 '>Event</Link>
        <Link to='/library' className='text-[17px]  text-slate-300 '>Library</Link>
        <Link to='/admissions' className='text-[17px]  text-slate-300 '>Admissions</Link>
        <Link to='/about' className='text-[17px]  text-slate-300 '>About</Link>
      </div>

      <div className='flex flex-col gap-3 mt-5'>
        <h1 className='text-[20px] font-semibold text-slate-400 mb-3'>Join our Mailing List</h1>
        <p className='text-[15px]  text-slate-300 mb-3'>Subscribe to get our weekly newsletter delivered directly to your inbox</p>
        <div className='flex items-center gap-2'>
        <input type="email" placeholder='Enter your email' className='rounded ml-[170px] lg:ml-[2px] lg:w-13 lg:py-1 text-[20px]' />
        <button className='py-1 px-3 text-[20px] rounded bg-blue-400' >Subscribe</button>
      </div>
    </div>

    <div className='flex flex-col gap-3 mt-5'>
    <h1 className='text-[20px] font-semibold text-slate-400 mb-3'>Contact info</h1>
    <p className='flex items-center gap-2 ml-[240px] lg:ml-[140px]' >
            <FaPhone className='text-[30px] font-semibold'/>
            <span className='text-[20px] max-[200px]:text-orange-400'>34576 47550</span>
        </p>
        <p  className='flex items-center gap-2 ml-[240px] lg:ml-[140px] '>
            <CiMail className='text-[30px] font-semibold'/>
            <span className='text-[20px]'>abc@gmail.com</span>
        </p>

    </div>

    </div>
  )
}

export default Footer
