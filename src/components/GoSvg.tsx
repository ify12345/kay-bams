import * as React from 'react'
import { SVGProps } from 'react'

export default function GoSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
    >
      <rect width={36} height={36} fill="#A192E4" rx={18} />
      <path
        fill="#fff"
        d="m19.569 13.097 4.667 4.667a.332.332 0 0 1 0 .472l-4.667 4.666a.334.334 0 0 1-.471-.471l4.097-4.097H12a.333.333 0 0 1 0-.667h11.196l-4.098-4.097a.334.334 0 0 1 .471-.473Z"
      />
    </svg>
  )
}
