import * as React from 'react'
import { Link } from 'react-scroll'
import UpArrow from './UpArrow'

export default function Footer() {
  return (
    <div className="flex flex-col text-white px-4 lg:px-[120px] " id="footer">
      <div className="flex flex-col lg:flex-row items-center py-[80px] relative border-b border-white w-full justify-between gap-10 lg:gap-0">
        <div className="max-w-[593px] text-xl lg:text-[40px] lg:leading-[60px] font-[700]">
          Let's work on something great together!🤝
        </div>
        <div className="flex flex-col text-xl gap-[24px] lg:pr-[93px]">
          <a href="">LinkedIn</a>
          <a href="">X</a>
          <a href="">Behance</a>
          <a href="">Email</a>
        </div>
        <div className="absolute right-0 bottom-1">
        <Link to="home" className="cursor-pointer ">
          <UpArrow />
        </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center w-full justify-between py-10">
        <p>Thanks for visiting</p>
        <p>© 2024 Kayode Bamidele. All rights reserved.</p>
      </div>
    </div>
  )
}
