import { Icon } from "@chakra-ui/react";
import React from "react";

function Logout({ color }) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_11233_2452)">
        <path
          fill={color}
          d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 00-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_11233_2452">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </Icon>
  );
}

export default Logout;
