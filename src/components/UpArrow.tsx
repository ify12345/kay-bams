import * as React from 'react'
import { SVGProps } from 'react'
export default function UpArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={76}
      height={76}
      fill="none"
    >
      <g filter="url(#a)">
        <rect
          width={40}
          height={40}
          x={18}
          y={50}
          fill="#A192E4"
          rx={20}
          transform="rotate(-90 18 50)"
        />
        <path
          fill="#fff"
          d="m33.097 28.431 4.667-4.667a.332.332 0 0 1 .472 0l4.666 4.667a.334.334 0 0 1-.471.471l-4.097-4.097V36a.333.333 0 0 1-.667 0V24.804l-4.097 4.098a.334.334 0 0 1-.473-.471Z"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={76}
          height={76}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_540_8578"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={6}
            result="effect2_dropShadow_540_8578"
          />
          <feOffset dy={8} />
          <feGaussianBlur stdDeviation={6} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend
            in2="effect1_dropShadow_540_8578"
            result="effect2_dropShadow_540_8578"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_540_8578"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
