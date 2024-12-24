import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import Kay from '@/assets/images/kay.png'
import Image1 from '@/assets/images/about1.png'
import Image2 from '@/assets/images/about2.png'
import Image3 from '@/assets/images/about3.png'
import Image4 from '@/assets/images/about4.png'
import Image5 from '@/assets/images/about5.png'
import Image6 from '@/assets/images/about6.png'
import { Link } from 'react-scroll'


const about = [{ imgSrc: Image1 }, { imgSrc: Image2 }, { imgSrc: Image3 }]
const about2 = [{ imgSrc: Image4 }, { imgSrc: Image5 }, { imgSrc: Image6 }]

export default function About() {
  return (
    <div className="min-h-[100vh] lg:min-h-[100vh] py-6" id="about">
      <div className="flex justify-between items-center px-3 lg:px-[120px]">
        <h1 className="text-3xl font-bold text-white">About Me👷🏽‍♂️</h1>
        <Link to="experience" className=" cursor-pointer">
          <FaArrowDownLong color="white" size={40} />
        </Link>
      </div>

      <div className="flex items-center flex-col-reverse lg:flex-row  px-3 lg:px-[120px] gap-[24px] text-white xl:text-[40px] leading-[32px] xl:leading-[60px] py-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-[40px] ">
          <p className="max-w-[588px]">
            <span className="text-[#A192E4]">Hello!</span>My name is Kayode
            Bamidele, I enjoy solving problems in a creative way. I currently
            work as a freelance designer.
          </p>
          <p className="text-base">
            Currently based in Lagos, Nigeria. I am a seasoned product designer
            with 4 years of experience. I've had the privilege of working at
            both software development and startup companies, creating
            interactive experiences for digital products spanning fields such as
            health, real estate, entertainment and logistics.
          </p>
          <p className="text-base">
            Whether you're an entrepreneur, a small business owner, or a startup
            founder seeking a design expert, I'm excited to embark on this
            creative journey with you. Let's collaborate and bring your vision
            to life!.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={Kay} alt="" className="w-full object-cover" />
        </div>
      </div>

      <div className="relative overflow-x-scroll w-full py-8 scrollbar-thin scrollbar-track-black/50 scrollbar-thumb-black  xl:pt-20">
        <div className="scroll-container flex items-center gap-6 animate-scroll">
          {about.map((item, index) => {
            return (
              <div className="xl:size-[588px]" key={index}>
                <img src={item.imgSrc} alt="" className="w-full object-cover" />
              </div>
            )
          })}
        </div>
      </div>

      <div className="relative overflow-x-scroll w-full py-8 scrollbar-thin scrollbar-track-black/50 scrollbar-thumb-black xl:pt-20">
        <div className="scroll-container flex items-center gap-6 animate-scroll">
          {about2.map((item, index) => {
            return (
              <div className="xl:size-[588px]" key={index}>
                <img src={item.imgSrc} alt="" className="w-full object-cover" />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
