import * as React from 'react'

function SvgPerson(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.95 11.495c2.713 0 4.912-2.573 4.912-5.747C15.862 1.346 13.663 0 10.95 0 8.239 0 6.04 1.346 6.04 5.748c0 3.174 2.198 5.747 4.91 5.747zm10.845 8.46l-2.478-5.58a1.243 1.243 0 00-.56-.597l-3.845-2.001a.248.248 0 00-.264.022 6.091 6.091 0 01-3.697 1.257A6.091 6.091 0 017.253 11.8a.248.248 0 00-.264-.022l-3.844 2.001c-.248.13-.447.34-.56.596L.107 19.955c-.17.385-.136.825.094 1.178s.617.564 1.038.564h19.424c.42 0 .809-.211 1.038-.564.23-.353.264-.793.094-1.178z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgPerson
