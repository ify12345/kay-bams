import * as React from 'react'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import OtherUi from '@/components/OtherUi'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'


const Home = () => {
  return (
    <div className=''>
     <Navbar/>
     <Projects/>
     <About/>
     <Experience/>
     <Skills/>
     <OtherUi/>
     <Process/>
     <Footer/>
    </div>
  )
}

export default Home
