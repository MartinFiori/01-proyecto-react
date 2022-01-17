import * as React from "react"

const UserIcon = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title />
    <circle cx={12} cy={8} fill="var(--text-color)" r={4} />
    <path
      d="M20 19v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6Z"
      fill="var(--text-color)"
    />
  </svg>
)

export default UserIcon