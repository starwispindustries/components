import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

function NotificationIcon() {
  const fill = useColorModeValue("#733D47", "#BF9B9B")
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 014 0v.29c2.97.88 5 3.61 5 6.71v6l2 2zm-7 2a2 2 0 01-4 0"
      ></path>
    </svg>
  );
}

export default NotificationIcon;
