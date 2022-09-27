import { Flex } from "@chakra-ui/react";
import React from "react";

const NotificationPopup = () => {
  return (
    <Flex
      w="full"
      h="calc(100% - 60px)"
      bg="white"
      position={"absolute"}
      zIndex="9999"
      top={"60px"}
      left={0}
    ></Flex>
  );
};

export default NotificationPopup;
