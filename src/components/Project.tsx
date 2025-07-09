/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { FaArrowDownLong } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import pro1 from '@/assets/images/pro-1.png'
import pro2 from '@/assets/images/pro-2.png'
import pro3 from '@/assets/images/pro3.png'
import pro4 from '@/assets/images/pro4.png'
import pro5 from '@/assets/images/pro5.png'
import pro6 from '@/assets/images/pro6.png'
import pro7 from '@/assets/images/pro7.png'
import pro8 from '@/assets/images/pro8.png'

interface ProjectData {
  title: string
  titled: string
  par1: string
  par2: string
  par3: string
  par4?: string
  image1?: string
  image2?: string
  projectUrl?: string
  date?: string
  color: string
}

interface AccordionProps {
  project: ProjectData
  isLastItem: boolean
  index: number
}

const projectsData: ProjectData[] = [
  {
    title: 'NIMBLE  2025',
    titled: 'NIMBLE',
    par1: 'A grocery shopping app that allows users checkout all in under 30 seconds. Snap photo of products, pay instantly and quickly walk out of crowded stores.',
    par2: 'I contributed to the design of the Recipes and Veggies features, and refined key existing components of the mobile app ahead of launch. By the time the app went live, it had already been downloaded by over 100 users.',
    par3: 'Currently collaborating closely with the founder to shape features focused on customer retention, scalable growth, and achieving product-market fit.',
    image1: pro1,
    image2: pro2,
    projectUrl: 'https://example.com/ecommerce-dashboard',
    date: '2025',
    color: '#074F51'
  },
  {
    title: 'SIKERHUB 2025',
    titled: 'SIKERHUB',
    par1: 'SikerHub is a development and marketing agency that offers businesses and brands cutting  edge digital solutions ranging from creative design, web development to data analysis.',
    par2: 'Designed a mobile-responsive website for SikerHub to establish a strong digital presence and effectively convert visitors into paying customers.',
    par3: 'The result was a fully responsive website, strategically designed with conversion rate optimization in mind to boost user engagement and drive conversions.',
    par4: 'Ahead of launch, I projected an 80%+ session duration and daily traffic of 100-300 visitors. The site was designed with performance and conversion in mind, tracking key metrics like bounce rate, engagement time, and conversion rate to measure success.',
    image1: pro3,
    image2: pro4,
    projectUrl: 'https://example.com/ecommerce-dashboard',
    date: '2025',
    color: '#0096FF'
  },
  {
    title: 'BREEZA 2024',
    titled: 'BREEZA',
    par1: 'Breeza is platform where beauty and wellness professionals connect with customers, provides tools to manage bookings, that offers a wider range of services, including home service, promotes community engagement and helps professionals grow their business. Offers personalized e-commerce shops and franchise-ready features.',
    par2: 'Redesigned Breeza\'s website to align with its new product direction, and contributed to the design of both the client-facing and customer-facing mobile apps.',
    par3: 'Due to difficulties onboarding beauty professionals, the team made a strategic decision to temporarily pause regular operations and reassess the platform\'s onboarding approach.',
    image1: pro5,
    image2: pro6,
    projectUrl: 'https://example.com/ecommerce-dashboard',
    date: '2024',
    color: '#6C3530'
  },
  {
    title: 'CLOUDCLINIC  2024',
    titled: 'CLOUDCLINIC',
    par1: 'CloudClinic is a telehealth app that connects people with licensed doctors, specialists, and health facilities in real-time, bring the full, but more convenient hospital experience to your home or office.',
    par2: 'As the sole designer on the project, I led the end-to-end design of the web app, admin portal, and key user-facing features like "Find Me a Doctor." I also revamped the partners\' app used by healthcare providers, redesigned the onboarding and sign-up flow, and improved multiple core experiences — delivering a cohesive, user-centered product across the board.',
    par3: 'Boosted user sign-ups by 25% through a redesigned onboarding flow, which reduced friction by shifting patients health data collection to the doctors\' end and contributed to 1K+ app downloads on Google Play Store by simplifying the user journey.',
    image1: pro7,
    image2: pro8,
    projectUrl: 'https://example.com/ecommerce-dashboard',
    date: '2024',
    color: '#2CBCEF'
  },
]

const Accordion: React.FC<AccordionProps> = ({ project, isLastItem, index }) => {
  const [isOpen, setIsOpen] = React.useState(true)

  // Animation variants
  const accordionVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const contentVariants: Variants = {
    hidden: { 
      opacity: 0,
      height: 0
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <motion.div 
      className="py-6 w-full text-white border-b border-gray-700/30"
      variants={accordionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex justify-between items-start cursor-pointer mb-4"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ 
          scale: 1.01,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.99 }}
      >
        <motion.h3
          className="font-semibold text-2xl md:text-3xl"
          style={{ color: project.color }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          {project.title}
        </motion.h3>
        <motion.span 
          className="text-3xl font-light ml-4 flex-shrink-0"
          animate={{ 
            rotate: isOpen ? 0 : 0,
            scale: isOpen ? 1.1 : 1
          }}
          transition={{ 
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </motion.div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6 overflow-hidden"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Project Details - Left Side */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.div variants={textVariants}>
                <h4
                  className="text-2xl lg:text-3xl capitalize font-semibold mb-2"
                  style={{ color: project.color }}
                >
                  {project.titled}
                </h4>
              </motion.div>
              
              <motion.div 
                className='flex flex-col gap-8 text-base text-white text-justify max-w-[400px]'
                variants={itemVariants}
              >
                <motion.div variants={textVariants}>
                  <p className="text-2xl text-[#808494]">{project.date}</p>
                </motion.div>

                <motion.div 
                  variants={textVariants}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <p className="text-base text-[#CCCCCC] leading-relaxed">{project.par1}</p>
                </motion.div>
                
                <motion.div 
                  variants={textVariants}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <p className="text-base text-[#CCCCCC] leading-relaxed">{project.par2}</p>
                </motion.div>
                
                <motion.div 
                  variants={textVariants}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <p className="text-base text-[#CCCCCC] leading-relaxed">{project.par3}</p>
                </motion.div>
                
                {project.par4 && (
                  <motion.div 
                    variants={textVariants}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <p className="text-base text-[#CCCCCC] leading-relaxed">{project.par4}</p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            {/* Project Image - Right Side */}
            <motion.div 
              className="flex items-center justify-center"
              variants={itemVariants}
            >
              <div className="relative w-full flex flex-col gap-6">
                <motion.img
                  src={project.image1}
                  alt={`${project.title} preview`}
                  className="w-full h-auto rounded-lg shadow-2xl border border-gray-700/30"
                  loading="lazy"
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    transition: { 
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                />
                
                <motion.img
                  src={project.image2}
                  alt={`${project.title} preview`}
                  className="w-full h-auto rounded-lg shadow-2xl border border-gray-700/30"
                  loading="lazy"
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.02,
                    rotateY: -5,
                    transition: { 
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                />

                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Project() {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div 
      className="min-h-screen bg-black" 
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Projects Accordion */}
      <motion.div 
        className="px-4 lg:px-[100px] pb-12"
        variants={containerVariants}
      >
        <div className="mx-auto">
          {projectsData.map((project, index) => (
            <Accordion
              key={index}
              project={project}
              isLastItem={index === projectsData.length - 1}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}