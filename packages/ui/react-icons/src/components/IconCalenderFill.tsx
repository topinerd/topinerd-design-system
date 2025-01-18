import * as React from "react";
import type { SVGProps } from "react";
const IconCalenderFill = ({
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
      d="M9.25007 3.79999C5.93632 3.79999 3.25 6.48628 3.25 9.79999V15.25C3.25 18.5637 5.93632 21.25 9.25006 21.25H14.7001C18.0139 21.25 20.7002 18.5637 20.7002 15.25V9.79999C20.7002 6.48628 18.0139 3.79999 14.7001 3.79999H9.25007ZM16.6028 10.0068C16.8827 9.70146 16.8621 9.22703 16.5567 8.94714C16.2514 8.66724 15.777 8.68787 15.4971 8.99321L10.6223 14.3111L8.66017 11.5641C8.41941 11.227 7.95099 11.1489 7.61392 11.3897C7.27686 11.6305 7.19879 12.0989 7.43955 12.4359L9.581 15.4339C10.0428 16.0805 10.9827 16.1377 11.5196 15.552L16.6028 10.0068Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 6.54999V3.54999C8.25 3.13577 8.58579 2.79999 9 2.79999C9.41421 2.79999 9.75 3.13577 9.75 3.54999V6.54999C9.75 6.9642 9.41421 7.29999 9 7.29999C8.58579 7.29999 8.25 6.9642 8.25 6.54999Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 6.54999V3.54999C14.25 3.13577 14.5858 2.79999 15 2.79999C15.4142 2.79999 15.75 3.13577 15.75 3.54999V6.54999C15.75 6.9642 15.4142 7.29999 15 7.29999C14.5858 7.29999 14.25 6.9642 14.25 6.54999Z"
      fill={fill}
    />
  </svg>
);
export default IconCalenderFill;
