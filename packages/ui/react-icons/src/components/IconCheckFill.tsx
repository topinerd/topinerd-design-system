import * as React from "react";
import type { SVGProps } from "react";
const IconCheckFill = ({
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
      d="M21.5 11.75C21.5 17.1348 17.1348 21.5 11.75 21.5C6.36522 21.5 2 17.1348 2 11.75C2 6.36522 6.36522 2 11.75 2C17.1348 2 21.5 6.36522 21.5 11.75Z"
      fill={fill}
    />
    <path
      d="M16.2588 8.1989C16.5631 8.47985 16.5821 8.95435 16.3012 9.25871L11.1885 14.7974C10.6437 15.3877 9.69155 15.3182 9.23816 14.6551L7.13096 11.5733C6.89717 11.2314 6.98482 10.7647 7.32675 10.5309C7.66867 10.2971 8.13539 10.3848 8.36918 10.7267L10.2992 13.5494L15.199 8.24129C15.4799 7.93693 15.9544 7.91795 16.2588 8.1989Z"
      fill="white"
    />
  </svg>
);
export default IconCheckFill;
