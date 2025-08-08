/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import OtherUi from '@/components/OtherUi'
import Project from '@/components/Project'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { TranslationProvider } from '@/components/contexts/TranslationContext'


const Home = () => {
  return (
    <TranslationProvider>
      <Navbar />
      <Experience />
      <Project />
      <Footer />
    </TranslationProvider>
  )
}

export default Home
