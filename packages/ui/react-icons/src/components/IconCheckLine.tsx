import * as React from "react";
import type { SVGProps } from "react";
const IconCheckLine = ({
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
    <g clipPath="url(#clip0_1508_810)">
      <path
        d="M20.5428 5.35915C21.1195 5.86645 21.1555 6.72322 20.6231 7.2728L10.9361 17.2738C9.90377 18.3396 8.09974 18.2141 7.2407 17.0168L3.24814 11.4522C2.80516 10.8348 2.97124 9.99207 3.6191 9.56992C4.26695 9.14776 5.15124 9.30604 5.59422 9.92344L9.2511 15.0202L18.5348 5.43569C19.0671 4.88611 19.9661 4.85184 20.5428 5.35915Z"
        fill={fill}
      />
      <path
        d="M20.5428 5.35915C21.1195 5.86645 21.1555 6.72322 20.6231 7.2728L10.9361 17.2738C9.90377 18.3396 8.09974 18.2141 7.2407 17.0168L3.24814 11.4522C2.80516 10.8348 2.97124 9.99207 3.6191 9.56992C4.26695 9.14776 5.15124 9.30604 5.59422 9.92344L9.2511 15.0202L18.5348 5.43569C19.0671 4.88611 19.9661 4.85184 20.5428 5.35915Z"
        fill={fill}
        fillOpacity={0.2}
      />
    </g>
    <defs>
      <clipPath id="clip0_1508_810">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default IconCheckLine;
