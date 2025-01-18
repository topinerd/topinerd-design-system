import * as React from "react";
import type { SVGProps } from "react";
const IconMenuLine = ({
  fill = "currentColor",
  stroke = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1047_779)">
      <path
        d="M4.5 6H20.5"
        stroke={stroke}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        d="M4.5 12H20.5"
        stroke={stroke}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        d="M4.5 18H20.5"
        stroke={stroke}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1047_779">
        <rect width={24} height={24} fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);
export default IconMenuLine;
