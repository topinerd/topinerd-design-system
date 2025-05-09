import * as React from "react";
import type { SVGProps } from "react";
const IconArrowdownFill = ({
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
      d="M11.2965 14.3038C11.6862 14.6894 12.3137 14.6894 12.7034 14.3038L16.3336 10.7107C16.9686 10.0823 16.5236 9 15.6302 9H8.36968C7.47629 9 7.03126 10.0823 7.66623 10.7107L11.2965 14.3038Z"
      fill={fill}
    />
  </svg>
);
export default IconArrowdownFill;
