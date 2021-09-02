import * as React from "react";

function SvgVolumeMid(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 10a4 4 0 00-4-4v2a2 2 0 010 4v2a4 4 0 004-4z" fill="#000" />
      <path
        d="M20 10a8 8 0 00-8-8v2c3.312 0 6 2.687 6 6 0 3.312-2.688 6-6 6v2a8 8 0 008-8zM2 6a2 2 0 00-2 2v4a2 2 0 002 2h4l4 6V0L6 6H2z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgVolumeMid;
