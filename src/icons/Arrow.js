import * as React from 'react'

function SvgArrow(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 7 11"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Arrow_svg__clip0)">
        <path
          d="M6.116 6.361a1.246 1.246 0 000-1.714L1.991.363a1.137 1.137 0 00-1.65 0 1.246 1.246 0 000 1.714l3.3 3.427-3.3 3.427a1.246 1.246 0 000 1.714 1.137 1.137 0 001.65 0l4.125-4.284z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="Arrow_svg__clip0">
          <path fill="#fff" transform="rotate(-90 5.5 5.5)" d="M0 0h11v7H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgArrow
