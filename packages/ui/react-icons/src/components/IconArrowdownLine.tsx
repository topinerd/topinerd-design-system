import * as React from "react";
import type { SVGProps } from "react";
const IconArrowdownLine = ({
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
      d="M6.77101 11.2438C5.65981 10.144 6.43861 8.25 8.00205 8.25H15.2626C16.826 8.25 17.6048 10.144 16.4936 11.2438L12.8633 14.8368C12.1814 15.5118 11.0832 15.5118 10.4013 14.8368L6.77101 11.2438ZM8.00205 9.75C7.7787 9.75 7.66744 10.0206 7.82618 10.1777L11.4564 13.7707C11.5539 13.8671 11.7107 13.8671 11.8082 13.7707L15.4384 10.1777C15.5972 10.0206 15.4859 9.75 15.2626 9.75H8.00205Z"
      fill={fill}
    />
  </svg>
);
export default IconArrowdownLine;
