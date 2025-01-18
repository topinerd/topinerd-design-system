import * as React from "react";
import type { SVGProps } from "react";
const IconSpotLine = ({
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
      d="M12 3.75C7.92838 3.75 4.75 6.74061 4.75 10.2857C4.75 12.9724 5.90455 14.5622 7.38395 15.8611C7.96894 16.3747 8.58757 16.8285 9.22111 17.2931C9.41473 17.4351 9.60974 17.5781 9.8056 17.7242C10.5874 18.3072 11.3759 18.9345 12 19.6834C12.6241 18.9345 13.4126 18.3072 14.1944 17.7242C14.3903 17.5781 14.5853 17.4351 14.7789 17.2931C15.4124 16.8285 16.0311 16.3747 16.6161 15.8611C18.0954 14.5622 19.25 12.9724 19.25 10.2857C19.25 6.74061 16.0716 3.75 12 3.75ZM3.25 10.2857C3.25 5.78324 7.23506 2.25 12 2.25C16.7649 2.25 20.75 5.78324 20.75 10.2857C20.75 13.53 19.301 15.4999 17.6057 16.9883C16.9662 17.5498 16.2752 18.0564 15.6321 18.5279C15.447 18.6636 15.2659 18.7963 15.0911 18.9267C14.2861 19.527 13.5997 20.086 13.093 20.7162C12.8046 21.0748 12.3813 21.2268 12 21.2268C11.6187 21.2268 11.1954 21.0748 10.907 20.7162C10.4003 20.086 9.71388 19.527 8.90888 18.9267C8.73411 18.7963 8.553 18.6635 8.36792 18.5279C7.72482 18.0564 7.0338 17.5498 6.39429 16.9883C4.69902 15.4999 3.25 13.53 3.25 10.2857ZM12.0002 7.35C10.5631 7.35 9.45605 8.45579 9.45605 9.75C9.45605 11.0442 10.5631 12.15 12.0002 12.15C13.4372 12.15 14.5443 11.0442 14.5443 9.75C14.5443 8.45579 13.4372 7.35 12.0002 7.35ZM7.95605 9.75C7.95605 7.56483 9.79864 5.85 12.0002 5.85C14.2017 5.85 16.0443 7.56483 16.0443 9.75C16.0443 11.9352 14.2017 13.65 12.0002 13.65C9.79864 13.65 7.95605 11.9352 7.95605 9.75Z"
      fill={fill}
    />
  </svg>
);
export default IconSpotLine;
