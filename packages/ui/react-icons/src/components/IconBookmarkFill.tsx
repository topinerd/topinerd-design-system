import * as React from "react";
import type { SVGProps } from "react";
const IconBookmarkFill = ({
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
      d="M5 3.5V20.7464C5 21.1982 5.5518 21.4183 5.86276 21.0905L11.4082 15.2445C11.6007 15.0415 11.9222 15.036 12.1216 15.2321L18.1493 21.163C18.4655 21.474 19 21.2501 19 20.8066V3.5C19 3.22386 18.7761 3 18.5 3H5.5C5.22386 3 5 3.22386 5 3.5Z"
      fill={fill}
    />
  </svg>
);
export default IconBookmarkFill;
