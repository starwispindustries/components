import { Icon } from "@chakra-ui/react";
import React from "react";

function Storage({ color }) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_11233_2476)">
        <path
          fill={color}
          d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_11233_2476">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </Icon>
  );
}

export default Storage;
