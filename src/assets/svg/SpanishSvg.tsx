import * as React from "react"
import { SVGProps } from "react"
const SpanishSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
  >
    <path fill="#F1B31C" d="M2.223 7.556h27.555v16.888H2.223V7.556Z" />
    <path
      fill="#D22F27"
      d="M10.223 14.667v3.11a.891.891 0 0 1-.89.89H7.557a.892.892 0 0 1-.889-.89v-3.11M2.223 7.556h27.555v4H2.223v-4Zm0 12.888h27.555v4H2.223v-4Z"
    />
    <path fill="#F1B31C" d="M8.444 14.667h1.778v1.778H8.444v-1.778Z" />
    <path
      fill="#6A462F"
      d="M8.444 17.111a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333Z"
    />
    <path
      stroke="#6A462F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M12 14.667v4m-7.111-4v4m1.778-5.334a3.821 3.821 0 0 1 1.777-.444c.62.002 1.23.154 1.778.444m-5.778 5.334h.89m6.221 0h.89m-5.778-4h3.555v3.11a.892.892 0 0 1-.889.89H7.555a.892.892 0 0 1-.888-.89v-3.11Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M2.223 7.556h27.555v16.888H2.223V7.556Z"
    />
  </svg>
)
export default SpanishSvg
