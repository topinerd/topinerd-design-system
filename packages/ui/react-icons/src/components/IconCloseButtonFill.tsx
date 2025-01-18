import * as React from "react";
import type { SVGProps } from "react";
const IconCloseButtonFill = ({
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
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      fill={fill}
      fillOpacity={0.6}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.00039 8.00013C8.34919 7.65133 8.91471 7.65133 9.26351 8.00013L12.0003 10.7369L14.737 8.00013C15.0858 7.65133 15.6513 7.65133 16.0001 8.00013C16.3489 8.34893 16.3489 8.91445 16.0001 9.26325L13.2634 12L16.0001 14.7368C16.3489 15.0856 16.3489 15.6511 16.0001 15.9999C15.6513 16.3487 15.0858 16.3487 14.737 15.9999L12.0003 13.2631L9.26351 15.9999C8.91471 16.3487 8.34919 16.3487 8.00039 15.9999C7.65159 15.6511 7.65159 15.0856 8.00039 14.7368L10.7371 12L8.00039 9.26325C7.65159 8.91445 7.65159 8.34893 8.00039 8.00013Z"
      fill="white"
    />
  </svg>
);
export default IconCloseButtonFill;
