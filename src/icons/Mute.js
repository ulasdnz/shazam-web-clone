import * as React from "react";

function SvgMute(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 8v4a2 2 0 002 2h4l4 6V0L6 6H2a2 2 0 00-2 2zM24 7l-2-2-3 3-3-3-2 2 3 3-3 3 2 2 3-3 3 3 2-2-3-3 3-3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMute;
