import * as React from "react";
import type { SVGProps } from "react";
const IconFlightLine = ({
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
      d="M10 5.17539V9.20135C10 9.38529 9.89901 9.55438 9.73705 9.64159L3.76295 12.8584C3.601 12.9456 3.5 13.1147 3.5 13.2986V14.823C3.5 15.1594 3.82552 15.3998 4.14704 15.3009L9.41621 13.6796C9.71807 13.5867 10.0294 13.7935 10.0608 14.1078L10.4626 18.1257C10.4847 18.3474 10.3576 18.557 10.1507 18.6397L8.3143 19.3743C8.12448 19.4502 8 19.6341 8 19.8385V20.8596C8 21.1849 8.30569 21.4236 8.62127 21.3447L11.8787 20.5303C11.9584 20.5104 12.0416 20.5104 12.1213 20.5303L15.3787 21.3447C15.6943 21.4236 16 21.1849 16 20.8596V19.8385C16 19.6341 15.8755 19.4502 15.6857 19.3743L13.8493 18.6397C13.6424 18.557 13.5153 18.3474 13.5374 18.1257L13.9392 14.1078C13.9706 13.7935 14.2819 13.5867 14.5838 13.6796L19.853 15.3009C20.1745 15.3998 20.5 15.1594 20.5 14.823V13.2986C20.5 13.1147 20.399 12.9456 20.2371 12.8584L14.2629 9.64159C14.101 9.55438 14 9.38529 14 9.20135V5.17539C14 5.06185 13.9614 4.9517 13.8904 4.86304L12.3904 2.98804C12.1903 2.73784 11.8097 2.73784 11.6096 2.98804L10.1096 4.86304C10.0386 4.9517 10 5.06186 10 5.17539Z"
      stroke={stroke}
      strokeWidth={1.5}
    />
  </svg>
);
export default IconFlightLine;
