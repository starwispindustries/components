import React from "react";
import { Flex, useColorModeValue, VStack } from "@chakra-ui/react";

import NotificationsList from "./NotificationList";

const NotificationPopupMobile = () => {
  const bg = useColorModeValue("primary.light._000", "primary.dark._000");

  return (
    <VStack
      w="full"
      h="calc(100% - 60px)"
      bg={bg}
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
