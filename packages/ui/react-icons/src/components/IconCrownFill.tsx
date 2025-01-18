import * as React from "react";
import type { SVGProps } from "react";
const IconCrownFill = ({
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
    <rect width={24} height={24} fill="white" />
    <path
      d="M5.72209 16.2054L4.4578 10.1814C4.30366 9.447 5.1545 8.92363 5.7405 9.39243L7.65974 10.9278C8.36896 11.4952 9.41573 11.3071 9.88302 10.5283L11.5712 7.71458C11.7654 7.39091 12.2345 7.39092 12.4287 7.71458L14.1169 10.5283C14.5842 11.3071 15.631 11.4952 16.3402 10.9278L18.2594 9.39243C18.8454 8.92363 19.6963 9.447 19.5421 10.1814L18.2778 16.2054C18.1807 16.6684 17.7723 17 17.2992 17H6.70077C6.22765 17 5.81927 16.6684 5.72209 16.2054Z"
      fill={fill}
    />
  </svg>
);
export default IconCrownFill;
