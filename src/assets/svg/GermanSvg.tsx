import * as React from "react"
import { SVGProps } from "react"
const GermanSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
  >
    <path fill="#F1B31C" d="M2.223 7.556h27.555v16.888H2.223V7.556Z" />
    <path fill="#D22F27" d="M2.223 13.333h27.555v5.334H2.223v-5.334Z" />
    <path fill="#000" d="M2.223 7.556h27.555v5.777H2.223V7.556Z" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M2.223 7.556h27.555v16.888H2.223V7.556Z"
    />
  </svg>
)
export default GermanSvg
