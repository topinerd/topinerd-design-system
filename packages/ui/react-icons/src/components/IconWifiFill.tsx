import * as React from "react";
import type { SVGProps } from "react";
const IconWifiFill = ({
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
      d="M14.5714 16.5714C14.5714 17.9916 13.4202 19.1429 12 19.1429C10.5798 19.1429 9.42857 17.9916 9.42857 16.5714C9.42857 15.1513 10.5798 14 12 14C13.4202 14 14.5714 15.1513 14.5714 16.5714Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 14.75C10.9941 14.75 10.1786 15.5655 10.1786 16.5714C10.1786 17.5774 10.9941 18.3929 12 18.3929C13.0059 18.3929 13.8214 17.5774 13.8214 16.5714C13.8214 15.5655 13.0059 14.75 12 14.75ZM8.67857 16.5714C8.67857 14.7371 10.1656 13.25 12 13.25C13.8344 13.25 15.3214 14.7371 15.3214 16.5714C15.3214 18.4058 13.8344 19.8929 12 19.8929C10.1656 19.8929 8.67857 18.4058 8.67857 16.5714Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.75C8.63487 5.75 5.61939 7.15129 3.54813 9.36906C3.2654 9.67178 2.79081 9.68799 2.48809 9.40527C2.18536 9.12254 2.16915 8.64795 2.45188 8.34523C4.80248 5.82836 8.21297 4.25 12 4.25C15.787 4.25 19.1975 5.82836 21.5481 8.34523C21.8309 8.64795 21.8146 9.12254 21.5119 9.40527C21.2092 9.68799 20.7346 9.67178 20.4519 9.36906C18.3806 7.15129 15.3651 5.75 12 5.75Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10.25C10.3575 10.25 8.77702 10.9851 7.38166 12.3504C7.0856 12.64 6.61075 12.6349 6.32107 12.3388C6.03138 12.0427 6.03656 11.5679 6.33263 11.2782C7.94011 9.70539 9.87929 8.75 12 8.75C14.1207 8.75 16.0599 9.70539 17.6674 11.2782C17.9634 11.5679 17.9686 12.0427 17.6789 12.3388C17.3893 12.6349 16.9144 12.64 16.6183 12.3504C15.223 10.9851 13.6425 10.25 12 10.25Z"
      fill={fill}
    />
  </svg>
);
export default IconWifiFill;
