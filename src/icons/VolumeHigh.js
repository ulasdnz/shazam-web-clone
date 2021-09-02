import * as React from "react";

function SvgVolumeHigh(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 12a4 4 0 00-4-4v2a2 2 0 010 4v2a4 4 0 004-4z" fill="#000" />
      <path
        d="M20 12a8 8 0 00-8-8v2c3.312 0 6 2.687 6 6 0 3.312-2.688 6-6 6v2a8 8 0 008-8z"
        fill="#000"
      />
      <path
        d="M12 0v2c5.521 0 10 4.478 10 10 0 5.521-4.479 10-10 10v2c6.627 0 12-5.373 12-12S18.627 0 12 0zM2 8a2 2 0 00-2 2v4a2 2 0 002 2h4l4 6V2L6 8H2z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgVolumeHigh;
