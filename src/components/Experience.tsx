import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import { Link } from 'react-scroll'



export default function Experience() {
  return (
    <div className="min-h-[100vh] lg:min-h-[100vh] py-6" id="experience">
      <div className="flex justify-between items-center px-3 lg:px-[120px]">
        <h1 className="text-3xl font-bold text-white">Experience</h1>
        <Link to="skills" className=" cursor-pointer">
          <FaArrowDownLong color="white" size={40} />
        </Link>
      </div>



  
      <div className="flex flex-col px-4 lg:px-[120px] gap-[40px] py-[64px]">
        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Diagnostar</p>
                <p className="text-base">Product Designer</p>
            </div>
            <p className='text-[#808080] text-2xl'>2024</p>
        </div>
        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Fodcon</p>
                <p className="text-base">Product Designer</p>
            </div>
            <p className='text-[#808080] text-2xl'>2024</p>
        </div>
        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Trucki</p>
                <p className="text-base">Product Designer(Contract)</p>
            </div>
            <p className='text-[#808080] text-2xl'>2024</p>
        </div>
        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Lights on Heights</p>
                <p className="text-base">Product Designer</p>
            </div>
            <p className='text-[#808080] text-2xl'>2023 - 2024</p>
        </div>
        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Impero Techne</p>
                <p className="text-base">UI Designer</p>
            </div>
            <p className='text-[#808080] text-2xl'>2021 - 2023</p>
        </div>
        <div className="border-b border-white py-4 flex justify-between items-center w-full text-white">
            <div className="flex flex-col gap-3">
                <p className="text-2xl">Devcent Trainings</p>
                <p className="text-base">UI Designer</p>
            </div>
            <p className='text-[#808080] text-2xl'>2020 - 2021</p>
        </div>
      </div>

    
    </div>
  )
}
