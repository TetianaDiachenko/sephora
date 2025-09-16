import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.905}
      d="m16 15-4.613-4.333m-4.352 1.486a6.277 6.277 0 0 1-2.302-.398 5.985 5.985 0 0 1-1.96-1.202 5.574 5.574 0 0 1-1.312-1.82A5.286 5.286 0 0 1 1 6.576c0-.74.157-1.473.461-2.156a5.574 5.574 0 0 1 1.313-1.82 5.986 5.986 0 0 1 1.959-1.203 6.276 6.276 0 0 1 2.302-.397c1.562.017 3.054.612 4.152 1.656 1.099 1.044 1.715 2.452 1.715 3.92s-.616 2.877-1.715 3.92c-1.098 1.044-2.59 1.64-4.152 1.657v-.001Z"
    />
  </svg>
);
export default SvgComponent;
