import * as React from "react";
import type { SVGProps } from "react";
const IconSlantLine = ({
  fill = "currentColor",
  stroke = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1587_858)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.15909 4C6.15909 3.58579 6.49488 3.25 6.90909 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4C20.75 4.41421 20.4142 4.75 20 4.75H14.2031C14.2074 4.81499 14.2032 4.88161 14.1897 4.94851L11.3005 19.25H17.0909C17.5051 19.25 17.8409 19.5858 17.8409 20C17.8409 20.4142 17.5051 20.75 17.0909 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20C3.25 19.5858 3.58579 19.25 4 19.25H9.79694C9.79263 19.185 9.79679 19.1184 9.81031 19.0515L12.6995 4.75H6.90909C6.49488 4.75 6.15909 4.41421 6.15909 4Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_1587_858">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default IconSlantLine;
