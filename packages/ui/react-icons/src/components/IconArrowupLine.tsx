import * as React from "react";
import type { SVGProps } from "react";
const IconArrowupLine = ({
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
      d="M16.4936 12.3492C17.6048 13.449 16.826 15.343 15.2626 15.343L8.00205 15.343C6.43861 15.343 5.65981 13.449 6.77101 12.3492L10.4013 8.7562C11.0832 8.08127 12.1814 8.08127 12.8633 8.7562L16.4936 12.3492ZM15.2626 13.843C15.4859 13.843 15.5972 13.5725 15.4384 13.4153L11.8082 9.82231C11.7107 9.7259 11.5539 9.7259 11.4564 9.82231L7.82618 13.4153C7.66744 13.5725 7.7787 13.843 8.00205 13.843L15.2626 13.843Z"
      fill={fill}
    />
  </svg>
);
export default IconArrowupLine;
