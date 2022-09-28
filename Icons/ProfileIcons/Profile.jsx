import { Icon } from "@chakra-ui/react";
import React from "react";

function Profile({ color }) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_11233_2470)">
        <path
          fill={color}
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_11233_2470">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </Icon>
  );
}

export default Profile;
