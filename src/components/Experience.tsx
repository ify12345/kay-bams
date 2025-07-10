/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { useTranslation } from './contexts/TranslationContext'


export default function Experience() {
  const { t } = useTranslation()

  return (
    <div className="min-h-[50vh] lg:min-h-[50vh] bg-[url('assets/images/grid-layer.png')] bg-cover bg-no-repeat bg-center py-6" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-10 lg:gap-0 px-4 md:px-[100px] xl:px-[120px] py-[64px]">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className='text-[#808080] text-2xl'>{t('currently')}</p>
          <a target='_blank' href="https://getnimbleapp.com/" className="text-2xl underline text-white">Nimble</a>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <p className='text-[#808080] text-2xl'>{t('previously')}</p>
          <a target='_blank' href="https://www.diagnostar.com/" className="text-2xl underline text-white">Diagnostar</a>
          <a target='_blank' href="https://cloudclinic.ng/" className="text-2xl underline text-white">CloudClinic</a>
          <a target='_blank' href="https://limestone.ng/" className="text-2xl underline text-white">Limestone</a>
          <a target='_blank' href="https://imperotechne.com/" className="text-2xl underline text-white">Impero Techne</a>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className='text-[#808080] text-2xl'>{t('startupIdeaExploration')}</p>
          <a target='_blank' href="https://farmezly.com.ng/" className="text-2xl underline text-white">Farmezly</a>
          <a target='_blank' href="" className="text-2xl underline text-white">SiteScope</a>
        </div>
      </div>
    </div>
  )
}