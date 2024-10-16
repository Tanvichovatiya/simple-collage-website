import React from 'react'
import { course } from '../assets/metadata'
const Courses = () => {
  return (
    <div className='mt-5 ml-4 mr-4'>
        <h1 className='text-center text-[30px] font-semibold text-rose-500' >Courses </h1>
      {
        course.map((item,index)=>(
            <li key={index} className='flex flex-col gap-4 '>
                <p className='text-left text-[20px] mb-4 font-semibold text-cyan-400'>{item.name}</p>
                <p className='mb-4 text-gray-500 text-[16px]'>{item.text}</p>
            </li>
        ))
      }
    </div>
  )
}

export default  Courses ;
