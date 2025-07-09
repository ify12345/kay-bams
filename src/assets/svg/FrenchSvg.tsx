import * as React from "react"
import { SVGProps } from "react"
const FrenchSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
  >
    <path fill="#fff" d="M2.223 7.556h27.555v16.888H2.223V7.556Z" />
    <path fill="#1E50A0" d="M2.223 7.556h9.333v16.888H2.223V7.556Z" />
    <path fill="#D22F27" d="M20.444 7.556h9.334v16.888h-9.334V7.556Z" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M2.223 7.556h27.555v16.888H2.223V7.556Z"
    />
  </svg>
)
export default FrenchSvg
