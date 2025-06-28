import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M10.5 8h1v11h-1V8ZM0 1V0h22v1H0Zm0 2V2h22v1H0Zm0 2V4h22v1H0Z"
    />
  </svg>
)
export default SvgComponent