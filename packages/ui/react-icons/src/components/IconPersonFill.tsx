import * as React from "react";
import type { SVGProps } from "react";
const IconPersonFill = ({
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
      d="M15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.75C10.7574 3.75 9.75 4.75736 9.75 6C9.75 7.24264 10.7574 8.25 12 8.25C13.2426 8.25 14.25 7.24264 14.25 6C14.25 4.75736 13.2426 3.75 12 3.75ZM8.25 6C8.25 3.92893 9.92893 2.25 12 2.25C14.0711 2.25 15.75 3.92893 15.75 6C15.75 8.07107 14.0711 9.75 12 9.75C9.92893 9.75 8.25 8.07107 8.25 6Z"
      fill={fill}
    />
    <path
      d="M5 17C5 14.2386 7.23858 12 10 12H14C16.7614 12 19 14.2386 19 17V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V17Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 17C4.25 13.8244 6.82436 11.25 10 11.25H14C17.1756 11.25 19.75 13.8244 19.75 17V19C19.75 20.5188 18.5188 21.75 17 21.75H7C5.48122 21.75 4.25 20.5188 4.25 19V17ZM10 12.75C7.65279 12.75 5.75 14.6528 5.75 17V19C5.75 19.6904 6.30964 20.25 7 20.25H17C17.6904 20.25 18.25 19.6904 18.25 19V17C18.25 14.6528 16.3472 12.75 14 12.75H10Z"
      fill={fill}
    />
  </svg>
);
export default IconPersonFill;
