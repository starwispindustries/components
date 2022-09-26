import { HStack, IconButton, Spacer } from "@chakra-ui/react";
import React from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import NotificationIcon from "../Icons/NotificationIcon";

const MobileTopBar = ({ onOpen }) => {
  return (
    <HStack w="full" p="20px" pb="0">
      <IconButton
        icon={<HamburgerMenu />}
        onClick={onOpen}
        w="30px"
        h="30px"
        bg="transparent"
        _hover={{ bg: "transparent" }}
      />

      <Spacer />

      <HStack>
        <IconButton
          icon={<NotificationIcon />}
          w="30px"
          h="30px"
          bg="transparent"
          _hover={{ bg: "transparent" }}
        />
      </HStack>
    </HStack>
  );
};

export default MobileTopBar;
