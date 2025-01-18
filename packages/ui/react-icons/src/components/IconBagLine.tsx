import * as React from "react";
import type { SVGProps } from "react";
const IconBagLine = ({
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
      d="M9.25 2.99917C9.25 2.03187 10.0343 1.25 11 1.25H13C13.9657 1.25 14.75 2.03187 14.75 2.99917V5.29847C17.5713 5.66597 19.75 8.07855 19.75 11V16C19.75 18.5654 18.0699 20.7385 15.75 21.4788V22C15.75 22.4142 15.4142 22.75 15 22.75C14.5858 22.75 14.25 22.4142 14.25 22V21.7447C14.1671 21.7482 14.0838 21.75 14 21.75H10C9.91624 21.75 9.83289 21.7482 9.75 21.7447V22C9.75 22.4142 9.41421 22.75 9 22.75C8.58579 22.75 8.25 22.4142 8.25 22V21.4788C5.93008 20.7385 4.25 18.5654 4.25 16V11C4.25 8.07855 6.42873 5.66597 9.25 5.29847V2.99917ZM10.75 5.25H13.25V2.99917C13.25 2.86191 13.1389 2.75 13 2.75H11C10.8611 2.75 10.75 2.86191 10.75 2.99917V5.25ZM10 6.75C7.65279 6.75 5.75 8.65279 5.75 11V16C5.75 18.3472 7.65279 20.25 10 20.25H14C16.3472 20.25 18.25 18.3472 18.25 16V11C18.25 8.65279 16.3472 6.75 14 6.75H10ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12ZM9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H14C14.4142 14.25 14.75 14.5858 14.75 15C14.75 15.4142 14.4142 15.75 14 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15Z"
      fill={fill}
    />
  </svg>
);
export default IconBagLine;
