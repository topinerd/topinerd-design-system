import * as React from "react";
import type { SVGProps } from "react";
const IconCrownLine = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9283 7.32871C11.4138 6.51954 12.5866 6.51954 13.0721 7.32871L14.7603 10.1424C14.9939 10.5318 15.5173 10.6259 15.8719 10.3422L17.7912 8.80678C18.9265 7.89847 20.575 8.91251 20.2764 10.3355L19.0121 16.3595C18.842 17.1698 18.1274 17.75 17.2994 17.75H6.70101C5.87304 17.75 5.15838 17.1698 4.98832 16.3595L3.72403 10.3355C3.42538 8.9125 5.07388 7.89848 6.20926 8.80678L8.12849 10.3422C8.48311 10.6259 9.00649 10.5318 9.24013 10.1424L10.9283 7.32871ZM12.0002 8.45774L10.5264 10.9141C9.82544 12.0824 8.25529 12.3645 7.19145 11.5135L5.27222 9.97808C5.26075 9.96891 5.2538 9.96612 5.25179 9.96538C5.24955 9.96455 5.24798 9.96429 5.24616 9.96423C5.24155 9.96408 5.22954 9.96547 5.21478 9.97454C5.20003 9.98361 5.19338 9.99371 5.19144 9.99789C5.19067 9.99954 5.19019 10.0011 5.18992 10.0034C5.18967 10.0056 5.18903 10.013 5.19205 10.0274L6.45634 16.0514C6.48063 16.1671 6.58273 16.25 6.70101 16.25H17.2994C17.4177 16.25 17.5198 16.1671 17.5441 16.0514L18.8084 10.0274C18.8114 10.013 18.8107 10.0056 18.8105 10.0034C18.8102 10.0011 18.8097 9.99954 18.809 9.9979C18.807 9.99371 18.8004 9.98361 18.7856 9.97454C18.7709 9.96547 18.7589 9.96408 18.7543 9.96423C18.7524 9.96429 18.7509 9.96455 18.7486 9.96538C18.7466 9.96612 18.7397 9.96891 18.7282 9.97808L16.809 11.5135C15.7451 12.3645 14.175 12.0824 13.474 10.9141L12.0002 8.45774Z"
      fill={fill}
    />
  </svg>
);
export default IconCrownLine;
