import * as React from "react";
import type { SVGProps } from "react";
const IconNextArrowLine = ({
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
    <g clipPath="url(#clip0_1587_856)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8541 3.40798C15.5271 3.66228 15.4682 4.13349 15.7225 4.46045L18.281 7.75H9.31453C7.68383 7.75 6.41103 8.50194 5.55765 9.60307C4.71768 10.6869 4.28683 12.0986 4.25226 13.4813C4.21771 14.8632 4.57768 16.2902 5.41224 17.3907C6.26462 18.5147 7.57928 19.25 9.31453 19.25H19.8145C20.2287 19.25 20.5645 18.9142 20.5645 18.5C20.5645 18.0858 20.2287 17.75 19.8145 17.75H9.31453C8.04978 17.75 7.17694 17.2353 6.60744 16.4843C6.02013 15.7098 5.72384 14.6368 5.75179 13.5187C5.77973 12.4014 6.13013 11.3131 6.74328 10.5219C7.34302 9.74806 8.19522 9.25 9.31453 9.25H18.374L15.7001 13.0699C15.4626 13.4092 15.5451 13.8769 15.8844 14.1144C16.2238 14.352 16.6914 14.2694 16.929 13.9301L20.429 8.93009C20.6177 8.66048 20.6086 8.29932 20.4065 8.03954L16.9065 3.53954C16.6522 3.21258 16.181 3.15368 15.8541 3.40798Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_1587_856">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default IconNextArrowLine;
