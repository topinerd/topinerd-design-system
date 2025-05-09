import * as React from "react";
import type { SVGProps } from "react";
const IconPreviousArrowLine = ({
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
    <g clipPath="url(#clip0_1587_859)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.96046 3.40798C9.28742 3.66228 9.34632 4.13349 9.09201 4.46045L6.53348 7.75H15.5C17.1307 7.75 18.4035 8.50194 19.2569 9.60307C20.0968 10.6869 20.5277 12.0986 20.5623 13.4813C20.5968 14.8632 20.2368 16.2902 19.4023 17.3907C18.5499 18.5147 17.2353 19.25 15.5 19.25H5C4.58579 19.25 4.25 18.9142 4.25 18.5C4.25 18.0858 4.58579 17.75 5 17.75H15.5C16.7648 17.75 17.6376 17.2353 18.2071 16.4843C18.7944 15.7098 19.0907 14.6368 19.0627 13.5187C19.0348 12.4014 18.6844 11.3131 18.0713 10.5219C17.4715 9.74806 16.6193 9.25 15.5 9.25H6.44049L9.11442 13.0699C9.35196 13.4092 9.26943 13.8769 8.9301 14.1144C8.59076 14.352 8.12311 14.2694 7.88558 13.9301L4.38558 8.93009C4.19685 8.66048 4.20593 8.29932 4.40799 8.03954L7.90799 3.53954C8.16229 3.21258 8.6335 3.15368 8.96046 3.40798Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_1587_859">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default IconPreviousArrowLine;
