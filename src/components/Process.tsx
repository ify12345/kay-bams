import * as React from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import { Link } from 'react-scroll'
interface AccordionProps {
  title: string
  content: string
  isLastItem: boolean
}

export default function Process() {
  const Accordion: React.FC<AccordionProps> = ({
    title,
    content,
    isLastItem,
  }) => {
    const [isOpen, setIsOpen] = React.useState(true)

    return (
      <div className="py-4 w-full text-white">
        <div
          className="flex justify-between items-start cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p
            className={`text-2xl ${
              isLastItem ? 'text-[#A192E4]' : 'text-white'
            }`}
          >
            {title}
          </p>
          <p className="text-3xl">{isOpen ? '-' : '+'}</p>
        </div>
        {isOpen && <p className="text-base text-[#808080] mt-2">{content}</p>}
      </div>
    )
  }

  const accordionData = [
    {
      title: 'Strategy call',
      content:
        "This is where I try to get a sense of the client's needs in relation to their business. At this stage, I am all about knowing the client, their company or project, what drives them and what problem(s) they are looking at solving.",
    },
    {
      title: 'Research & Ideation',
      content:
        "Having gotten enough clarity on the business needs and possible solutions, I set out to conduct research - competitive analysis, secondary/desktop research, surveys  etc. to validate my ideas and get more detailed insights into the problem, user's needs and solution(s).",
    },
    {
      title: 'MoodBoarding',
      content:
        "This is the phase where I spend time to determine the visual direction of the project I'm about to work on. I come up with moodboards based on the project's industry and send out a questionnaire to get feedback from clients on questions like top 3 products they think are well designed, adjectives to qualify the way they want people to feel using the product. I also show them couple of products doing something similar already and also industry trends that we could borrow from to bring value to the users.",
    },
    {
      title: 'Off Days',
      content:
        'Having set the foundation for the project at hand, I tend to spend 1 or 2 days engaged in non design related stuff like going through what other designers are doing on X, awwwards or seeing anime to get my creative juice up.',
    },
    {
      title: 'Pushing Pixel',
      content:
        "This is the phase where I open Figma on my PC and start creating pages titled; cover page, style guide, HiFi designs etc. I start with a couple of design screens to present to the client before stepping on the acceleration pedal - when the client is pleased. There are some projects I don't jump straight to the High Fidelity Designs but with a Low Fidelity Wireframe to ensure we're on the same page. This phase is not a liner process as I present my designs to the clients on an agreed time, getting feedback and talking about certain design elements have been used.",
    },
    {
      title: 'Handoff & Collaboration',
      content:
        "After series of presentations, the client has signed off on the final designs and now I can hand over to the development team, sharing link to the design file and some times link to an interactive prototype , mostly for projects where the developers were not carried along during the design review sessions. Where any feature set isn't clear, I jump on a call with the engineering team and also track UI fixes using clickup.",
    },
    {
      title: 'Testing & Iteration',
      content:
        "Before launching on stores, the team is encouraged to conduct an internal testing to figure out if people can easily interact with the app to achieve their goals, bugs, and gather feedback on flows that need to be made more intuitive. This is a continuous process but if the product meets a set quality index benchmark, it's pushed to production and feedback from actual users are noted and attended to as well.",
    },
    {
      title: 'Caveat:',
      content:
        "With some projects, I do not follow this process from a-z because there isn't budget for say Information Architecture, so I have to jump straight to high fidelity designs. While some clients, due to the tight timelines prefer I work on the hgh fidelity straight up. In conclusion, the project nature, budget and timeline determines the process.",
    },
  ]
  return (
    <div className="min-h-[30vh] lg:min-h-[70vh] pt-5" id="process">
      <div className="flex justify-between items-center px-3 lg:px-[120px]">
        <h1 className="text-3xl font-bold text-white">My Design Process</h1>
        <Link to="footer" className=" cursor-pointer">
          <FaArrowDownLong color="white" size={40} />
        </Link>
      </div>

      <div className="flex flex-col px-4 lg:px-[120px] gap-5 lg:gap-[40px] py-[24px]">
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isLastItem={index === accordionData.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
