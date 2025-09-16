import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="21px"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.5 21a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-.5.5h-21ZM22 20V1H2v19h20Z"
    />
    <path fill="currentColor" d="M0 20h24v1H0v-1Z" />
    <path
      fill="currentColor"
      d="M7.5 21a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-9Zm8.5-1v-9H8v9h8Z"
    />
    <path
      fill="currentColor"
      d="M11.5 10h1v11h-1V10ZM1 3V2h22v1H1Zm0 2V4h22v1H1Zm0 2V6h22v1H1Z"
    />
  </svg>
);
export default SvgComponent;