import * as React from "react";
import type { SVGProps } from "react";
const IconUnderlineLine = ({
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
    <g clipPath="url(#clip0_1587_857)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 20C5.25 19.5858 5.58579 19.25 6 19.25H18C18.4142 19.25 18.75 19.5858 18.75 20C18.75 20.4142 18.4142 20.75 18 20.75H6C5.58579 20.75 5.25 20.4142 5.25 20Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3.25C6.41421 3.25 6.75 3.58579 6.75 4V11.8C6.75 12.5227 7.00715 13.6442 7.77689 14.5707C8.5217 15.4673 9.80231 16.25 12 16.25C12.4142 16.25 12.75 16.5858 12.75 17C12.75 17.4142 12.4142 17.75 12 17.75C9.39769 17.75 7.6783 16.7994 6.62311 15.5293C5.59285 14.2891 5.25 12.8106 5.25 11.8V4C5.25 3.58579 5.58579 3.25 6 3.25Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3.25C17.5858 3.25 17.25 3.58579 17.25 4V11.8C17.25 12.5227 16.9929 13.6442 16.2231 14.5707C15.4783 15.4673 14.1977 16.25 12 16.25C11.5858 16.25 11.25 16.5858 11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C14.6023 17.75 16.3217 16.7994 17.3769 15.5293C18.4071 14.2891 18.75 12.8106 18.75 11.8V4C18.75 3.58579 18.4142 3.25 18 3.25Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_1587_857">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default IconUnderlineLine;
