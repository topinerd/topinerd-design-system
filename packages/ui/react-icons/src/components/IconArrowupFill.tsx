import * as React from "react";
import type { SVGProps } from "react";
const IconArrowupFill = ({
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
      d="M12.7034 9.28926C12.3137 8.90358 11.6862 8.90358 11.2965 9.28926L7.66623 12.8823C7.03126 13.5107 7.47629 14.593 8.36968 14.593L15.6302 14.593C16.5236 14.593 16.9686 13.5107 16.3336 12.8823L12.7034 9.28926Z"
      fill={fill}
    />
  </svg>
);
export default IconArrowupFill;
