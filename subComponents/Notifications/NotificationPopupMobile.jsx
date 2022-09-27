import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import NotificationCard from "./NotificationCard";
import NotificationsList from "./NotificationList";

const NotificationPopupMobile = () => {
  return (
    <VStack
      w="full"
      h="calc(100% - 60px)"
      bg="white"
      position={"absolute"}
      zIndex="9999"
      top={"60px"}
      left={0}
    >
      <NotificationsList />
    </VStack>
  );
};

export default NotificationPopupMobile;
