import * as React from "react";

function SvgCircle(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      
    >
      <circle cx={34} cy={34} r={31} stroke="currentColor" strokeWidth={4} />
    </svg>
  );
}

export default SvgCircle;
