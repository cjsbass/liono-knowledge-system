import { SVGProps } from "react"

export function LionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Main lion face shape - circular */}
      <circle cx="12" cy="12" r="8" />
      
      {/* Lion's nose */}
      <path d="M12 14.5a2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5z" />
      
      {/* Whiskers */}
      <line x1="8.5" y1="14" x2="5.5" y2="15" />
      <line x1="15.5" y1="14" x2="18.5" y2="15" />
      <line x1="8.5" y1="13" x2="5.5" y2="12" />
      <line x1="15.5" y1="13" x2="18.5" y2="12" />
      
      {/* Ears */}
      <path d="M7.5 7L9 9" />
      <path d="M16.5 7L15 9" />
    </svg>
  )
} 