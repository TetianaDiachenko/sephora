import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="22px"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M23.498 9c.326 0 .566.28.487.57l-3.078 11.32c-.177.652-.816 1.11-1.55 1.11H4.643c-.733 0-1.37-.458-1.55-1.11L.015 9.57C-.064 9.28.175 9 .502 9h22.996Zm-3.112 9.999H3.613l.453 1.668a.589.589 0 0 0 .576.414h14.716c.271 0 .51-.17.575-.414l.453-1.668Zm.815-3H2.797l.544 2h17.317l.543-2Zm.816-3H1.981l.544 2h18.948l.544-2Zm.84-3.08H1.143L1.71 12h20.58l.566-2.08v-.001ZM13.818.714l5.612 5.2a.501.501 0 0 1-.68.734l-5.612-5.2a1.674 1.674 0 0 0-2.278 0l-5.612 5.2a.5.5 0 1 1-.68-.734l5.612-5.2a2.674 2.674 0 0 1 3.638 0Z"
    />
  </svg>
)
export default SvgComponent