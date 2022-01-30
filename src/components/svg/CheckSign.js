import * as React from "react"

const CheckSign = (props) => (
  <svg height={60} width={60} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M22 13c0 5.523-4.477 10-10 10S2 18.523 2 13 6.477 3 12 3s10 4.477 10 10z"
      fill="#002f38"
    />
    <path
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
      fill="var(--text-color)"
    />
    <path
      d="m16 9-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 .125.1 8.125-8.1L16 9z"
      fill="#b7b7b7"
    />
    <path
      d="m16 8-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 .125.1 8.125-8.1L16 8z"
      fill="#fff"
    />
  </svg>
)

export default CheckSign
