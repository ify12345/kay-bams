import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import { Link } from 'react-scroll';

export default function Skills() {
  return (
    <div className="min-h-[50vh] lg:min-h-[60vh] py-5" id="skills">
      <div className="flex justify-between items-center px-3 lg:px-[120px]">
        <h1 className="text-3xl font-bold text-white">Skillsets</h1>
        <Link to="otherui" className=" cursor-pointer">
          <FaArrowDownLong color="white" size={40} />
        </Link>
      </div>



  
      <div className="flex flex-col lg:flex-row  px-4 lg:px-[120px] gap-[80px] py-20 justify-between">
        <div className="space-y-[40px]">
            <p className='text-[#808080] text-2xl'>B2B Software Design</p>
            <p className='text-[#808080] text-2xl'>Mobile Application Design</p>
            <p className='text-[#808080] text-2xl'>Web Application Design</p>
            <p className='text-[#808080] text-2xl'>User Interface Design</p>
        </div>
        <div className="space-y-[40px]">
            <p className='text-[#808080] text-2xl'>User Experience Design</p>
            <p className='text-[#808080] text-2xl'>User Flow Mapping</p>
            <p className='text-[#808080] text-2xl'>Wireframing</p>
            <p className='text-[#808080] text-2xl'>Interactive Prototyping</p>
        </div>
        <div className="space-y-[40px]">
            <p className='text-[#808080] text-2xl'>Information Architecture</p>
            <p className='text-[#808080] text-2xl'>Data Interpretation</p>
            <p className='text-[#808080] text-2xl'>Usability Testing</p>
        </div>
      
      </div>

    
    </div>
  )
}
