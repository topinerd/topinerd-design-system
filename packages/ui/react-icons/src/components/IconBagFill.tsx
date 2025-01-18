import * as React from "react";
import type { SVGProps } from "react";
const IconBagFill = ({
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.25 2.99917C9.25 2.03187 10.0343 1.25 11 1.25H13C13.9657 1.25 14.75 2.03187 14.75 2.99917V6.5H13.25V2.99917C13.25 2.86191 13.1389 2.75 13 2.75H11C10.8611 2.75 10.75 2.86191 10.75 2.99917V6.5H9.25V2.99917Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 11C5 8.23858 7.23858 6 10 6H14C16.7614 6 19 8.23858 19 11V16C19 18.7614 16.7614 21 14 21H10C7.23858 21 5 18.7614 5 16V11ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM10 14.25C9.58579 14.25 9.25 14.5858 9.25 15C9.25 15.4142 9.58579 15.75 10 15.75H14C14.4142 15.75 14.75 15.4142 14.75 15C14.75 14.5858 14.4142 14.25 14 14.25H10Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 22.75C8.58579 22.75 8.25 22.4142 8.25 22H9.75C9.75 22.4142 9.41421 22.75 9 22.75ZM9.75 22V21C9.75 20.5858 9.41421 20.25 9 20.25C8.58579 20.25 8.25 20.5858 8.25 21V22H9.75Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 22.75C14.5858 22.75 14.25 22.4142 14.25 22V21C14.25 20.5858 14.5858 20.25 15 20.25C15.4142 20.25 15.75 20.5858 15.75 21V22C15.75 22.4142 15.4142 22.75 15 22.75Z"
      fill={fill}
    />
  </svg>
);
export default IconBagFill;
