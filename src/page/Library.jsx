import React from 'react'
import { GoDotFill } from "react-icons/go";

const Library = () => {

  return (
    <div className='mt-5 mb-4 mr-4 ml-4'>
      <h1 className='text-[30px] text-gray-500'>Welcome Smt. K.S.N Kansagara Mahila College Library</h1><hr className='bg-gray-100' />
      <p className='text-[15px] mt-4 mb-5 text-left'>"I have always imagined that Paradise will be a kind of library." Jorge Luis Borges</p>
      <p className='text-[15px]  mb-5 text-left'>Library and Learning center Smt. K.S.N. Kansagara Mahila College has an ample collection of Books & Online resources. Every collection that has been added to the Library has been meticulously chosen to keep in mind the need of all levels of Learners namely Students, Teachers, and Researchers. We have some excellent Reference collection, which is also an additional feature of the Library.</p>
      <p className='text-[20px] font-semibold text-left'>Feature of Library :</p>
      
        
          <li className='list-none text-left ml-[190px]'>
            <span className='flex gap-2 items-center text-[20px]'><GoDotFill className='text-[20px]'/>Open access</span><br />
            <span className='flex gap-2 items-center text-[20px]'> <GoDotFill className='text-[20px]'/>Subscription to e-resources</span><br />
            <span className='flex gap-2 items-center text-[20px]'> <GoDotFill className='text-[20px]'/>Excellent reference collection</span><br />
            <span className='flex gap-2 items-center text-[20px]'><GoDotFill className='text-[20px]'/>A good collection of Multimedia</span><br />
            <span className='flex gap-2 items-center text-[20px]'><GoDotFill className='text-[20px]'/>Extended membership</span><br />
          </li>
        
      
    </div>
  )
}

export default Library
