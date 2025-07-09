import * as React from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import { IoMail } from 'react-icons/io5'
import { IoChevronDown } from 'react-icons/io5'
import Logo from '@/assets/images/logo.png'
import { Link } from 'react-scroll'

interface Language {
  code: string
  name: string
  flag: string
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState<boolean>(false)
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>('ENG')

  const languages: Language[] = [
    { code: 'ENG', name: 'English', flag: '🇺🇸' },
    { code: 'FRA', name: 'Français', flag: '🇫🇷' },
    { code: 'ESP', name: 'Español', flag: '🇪🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0]

  React.useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpen])

  // Function to handle link clicks
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  // Function to handle language selection
  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode)
    setLanguageDropdownOpen(false)
  }

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Element
      if (!target.closest('.language-dropdown')) {
        setLanguageDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Animation variants
  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const heroVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  }

  const heroTextVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const menuOverlayVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const menuContentVariants: Variants = {
    hidden: {
      x: "100%",
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const menuItemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const dropdownItemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -10
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <motion.main
      className="bg-[url('assets/images/grid-layer.png')] bg-cover bg-no-repeat bg-center relative z-30 text-white pb-14 h-full lg:h-[700px]"
      id="home"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <motion.header
        className="h-24 top-0 w-full flex items-center text-white"
        variants={itemVariants}
      >
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-[120px] w-full flex items-center justify-between relative z-40">
          <motion.a
            href="/"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={Logo}
              width={220}
              height={58}
              alt="kay-bams"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2
              }}
            />
          </motion.a>

          <motion.div
            className="flex items-center gap-[20px]"
            variants={itemVariants}
          >
            <motion.button
              className="border border-[#55DB62] items-center py-[8px] px-[16px] gap-[8px] rounded-[40px] hidden lg:flex"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(85, 219, 98, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-[#55DB62] size-[16px] rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />
              <h1 className="text-[#55DB62]">Available for work</h1>
            </motion.button>

            <motion.h1
              className="hidden lg:flex"
              variants={itemVariants}
            >
              Designer based in Lagos, Nigeria
            </motion.h1>

            {/* Language Switcher */}
            <div className="relative language-dropdown">
              <motion.button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="text-white font-medium">{currentLanguage.code}</span>
                <motion.div
                  animate={{
                    rotate: languageDropdownOpen ? 180 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <IoChevronDown className="text-white" size={16} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[140px] z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {languages.map((language) => (
                      <motion.button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language.code)}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg ${selectedLanguage === language.code ? 'bg-gray-50' : ''}`}
                        variants={dropdownItemVariants}
                        whileHover={{
                          backgroundColor: "#f3f4f6",
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="text-lg">{language.flag}</span>
                        <span className="text-gray-800 font-medium">{language.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: menuOpen ? 0 : 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoCloseSharp size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <GiHamburgerMenu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="bg-black bg-opacity-90 flex flex-col items-center z-30 pt-[100px] lg:pt-[150px] absolute inset-0 w-full px-4 lg:px-0"
              variants={menuOverlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="max-w-screen-2xl mx-auto lg:px-[120px] w-full flex items-center justify-between">
                <div className=""></div>
                <motion.div
                  className="flex flex-col"
                  variants={menuContentVariants}
                >
                  <ul className="text-white text-center space-y-8 text-2xl">
                    <motion.li
                      className="flex items-end justify-end"
                      variants={menuItemVariants}
                    >
                      <Link
                        className="cursor-pointer relative group"
                        to="about"
                        smooth={true}
                        duration={500}
                        onClick={handleLinkClick}
                      >
                        <motion.span
                          whileHover={{
                            x: -10,
                            color: "#55DB62",
                            transition: { duration: 0.3 }
                          }}
                        >
                          About Me
                        </motion.span>
                      </Link>
                    </motion.li>
                    <motion.li
                      className="flex items-end justify-end"
                      variants={menuItemVariants}
                    >
                      <Link
                        className="cursor-pointer relative group"
                        to="projects"
                        smooth={true}
                        duration={500}
                        onClick={handleLinkClick}
                      >
                        <motion.span
                          whileHover={{
                            x: -10,
                            color: "#55DB62",
                            transition: { duration: 0.3 }
                          }}
                        >
                          Projects
                        </motion.span>
                      </Link>
                    </motion.li>
                    <motion.li
                      className="flex items-end justify-end"
                      variants={menuItemVariants}
                    >
                      <a
                        className="cursor-pointer relative group"
                        target='_blank'
                        href="https://docs.google.com/document/d/1JB2UpfFEdOGgvQcACjX4sm4EM0fLsXtoXZ21iT-9qEs/edit?usp=drivesdk"
                        onClick={handleLinkClick}
                      >
                        <motion.span
                          whileHover={{
                            x: -10,
                            color: "#55DB62",
                            transition: { duration: 0.3 }
                          }}
                        >
                          My Resume
                        </motion.span>
                      </a>
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <motion.div
        className="lg:mt-4 mx-auto w-full flex justify-center items-center flex-col px-4 lg:px-0 gap-12"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col max-w-[916px] pt-[31px] lg:pt-[50px] gap-4 items-center justify-center"
          variants={heroTextVariants}
        >
          <motion.button
            className="border border-[#55DB62] items-center py-[8px] px-[16px] gap-[8px] rounded-[40px] lg:hidden flex"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(85, 219, 98, 0.3)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="bg-[#55DB62] size-[16px] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            />
            <h1 className="text-[#55DB62]">Available for work</h1>
          </motion.button>
          <motion.p
            className="text-[24px] lg:text-[80px] font-bold lg:leading-[150%] lg:-tracking-[1.5%] text-center"
            variants={heroTextVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Mobile & Web Design Expert
          </motion.p>
          <motion.p
            className="text-center text-sm lg:text-[16px] lg:leading-[150%] font-normal"
            variants={heroTextVariants}
          >
            Hey, I'm KayBams — Product Designer for Startups & Scaling Businesses.
            I design thoughtful web and mobile experiences that solve real problems and move businesses forward. From healthtech to eCommerce, logistics to SaaS — I help founders and teams turn big ideas into user-friendly, high-impact products.
          </motion.p>
        </motion.div>

        <motion.a
          href="mailto:bamidelekay@gmail.com"
          className="bg-white rounded-[40px] flex gap-2 lg:gap-4 items-center lg:py-[16px] py-2 px-3 lg:px-[68px] w-full lg:w-auto justify-center"
          variants={heroTextVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
            y: -5,
            transition: {
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
          whileTap={{
            scale: 0.95,
            y: 0,
            transition: { duration: 0.1 }
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <IoMail color="#A192E4" size={24} />
          </motion.div>
          <p className="text-black text-sm lg:text-[24px] leading-[36px] font-[500]">
            Contact Me
          </p>
        </motion.a>
      </motion.div>
    </motion.main>
  )
}