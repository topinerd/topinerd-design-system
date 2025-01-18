import * as React from "react";
import type { SVGProps } from "react";
const IconMinusLine = ({
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
      d="M6 12C6 11.5858 6.2708 11.25 6.60484 11.25H17.8952C18.2292 11.25 18.5 11.5858 18.5 12C18.5 12.4142 18.2292 12.75 17.8952 12.75H6.60484C6.2708 12.75 6 12.4142 6 12Z"
      fill={fill}
    />
  </svg>
);
export default IconMinusLine;
