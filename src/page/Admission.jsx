import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const text=[
  {
    detail:'    Admission: Smt. KSN Kansagara Mahila College is known for producing out storing students in every field. The college allows those extraordinary students who can make a difference in society in the various field of life. Hence we give admission on the basis of certain criteria. The admission fee includes exam fee in all the subjects.'
  },
  {
    detail:'    For FYBA only the students securing 60% or above will be allowed to keep English as a special subject. If the number of students is more, a test will be given or subject selection will be done on the basis of the test result. 35 students will be given admission in Psychology subject. The annual fee for B.A. is Rs.1,600/- only.'
  },
  {
    detail:'    The fee structure for B.Com. is Rs. 1700/- only'
  },
  {
    detail:'    The annual 1fee for FYBBA is Rs. 35,640/- and for FYBCA is RS. 36,440/- only.'
  },
  {
    detail:'    For FYBSW annual fee is Rs. 15,840/- only.'
  },
  {
    detail:'    For MSW the annual fee is Rs. 21, 340/ only.'
  },
  {
    detail:'    Minimum 55% is required for M.Com. For MCOM the annual fee is RS. 15,640/- only '
  },
  {
    detail:'    For a hostel, a separate form is to be filled up and attached with the admission form only. The admission will be given only till the vacancy allows. The annual fee for the hostel is Rs. 25,500/-.'
  },
  {
    detail:'    Please mention SC/ST/OBC/PH/EWS categories clearly on the top of the form. At the time of admission, students have to fill the Enrolment form and pay Annual fee and Exam fee.'
  }
 
]
const Admission = () => {
  return (
    <div className='mt-4  ml-4 mr-4'>
      <h1 className='text-left text-[30px] text-gray-700 font-semibold mb-5'>Admission detail</h1>
      {text.map((item,index)=>(
          <li key={index} className='mb-4 list-none text-left'>
            <p className='flex gap-4'>
              <span className='text-[30px] font-semibold'><FaLongArrowAltRight/></span>
              <span>{item.detail}</span>
            </p>
          </li>
  
        ))}
    </div>
  )
}

export default Admission
