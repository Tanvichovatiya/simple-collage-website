import React from 'react'
import event1 from '../assets/img/event1.jpeg'
import event2 from '../assets/img/event2.jpeg'
import event3 from '../assets/img/event3.jpeg'
import event4 from '../assets/img/event4.jpeg'
import event5 from '../assets/img/event5.jpeg'
import event6 from '../assets/img/event6.png'
import event7 from '../assets/img/event7.jpeg'
import event8 from '../assets/img/event8.jpeg'
import event9 from '../assets/img/event9.jpeg'


const Event = () => {
  const img=[
    {img:event1},
    {img:event2},
    {img:event3},
    {img:event4},
    {img:event5},
    {img:event6},
    {img:event7},
    {img:event8},
    {img:event9},
  ];
    return (
    <div className='mt-5 ml-4 mr-4'>
      <h1 className='mb-5'><span className='text-center bg-gray-800 text-red-200 px-4 py-2 text-[30px] '>Event Photo</span></h1>
      <div className='grid lg:grid-cols-3 gap-4 grid-cols-1 mb-5'>
      {
        img.map((item,index)=>(
          <li key={index} className='mt-1 list-none'>
            <img src={item.img} alt="" className='w-[300px] h-[200px]' />
          </li>
        ))
      }
      </div>
    
    </div>
  )
}

export default Event
