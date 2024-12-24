import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import Image1 from '@/assets/images/o1.png'
import Image2 from '@/assets/images/o2.png'
import Image3 from '@/assets/images/o3.png'
import Image4 from '@/assets/images/o4.png'
import Image5 from '@/assets/images/o5.png'
import GoSvg from './GoSvg'
import {Link} from 'react-scroll'

const projectLinks = [
  { imgSrc: Image1, link: 'https://example1.com',title:'Propadi' },
  { imgSrc: Image2, link: 'https://example2.com',title:'ShadowCat' },
  { imgSrc: Image3, link: 'https://example2.com',title:'Health Management Software' },
  { imgSrc: Image4, link: 'https://example2.com',title:'Trucki' },
  { imgSrc: Image5, link: 'https://example2.com',title:'Trucki Admin Web Portal' },
]

export default function OtherUi() {
  return (
    <div className="min-h-[100vh] lg:min-h-[100vh] py-6" id="otherui">
      <div className="flex justify-between items-center px-3 lg:px-[120px]">
        <h1 className="text-3xl font-bold text-white">Other UI Projects 👨🏽‍💻</h1>
        <Link to="process" className=" cursor-pointer">
          <FaArrowDownLong color="white" size={40} />
        </Link>
      </div>

      {/* Auto-Scrolling Section */}
      <div className="relative overflow-x-scroll w-full py-8 scrollbar-thin scrollbar-track-black/50 scrollbar-thumb-black">
        <div className="scroll-container flex items-center gap-6 animate-scroll">
          {projectLinks.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[300px] lg:min-w-[588px] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.imgSrc}
                alt={`Project ${index + 1}`}
                className="w-full h-[300px] lg:h-[588px] rounded-lg shadow-md"
              />
              <div className="w-full flex justify-between pt-[24px]">
                <h2 className="text-sm lg:text-2xl font-bold text-white">{project.title}</h2>
                <a
                  className="flex items-center text-white text-sm lg:text-[16px] gap-3"
                  href={project.link}
                  target="_blank"
                >
                  View project <GoSvg />{' '}
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>

    
    </div>
  )
}
