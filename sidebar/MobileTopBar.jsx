import {
  HStack,
  IconButton,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import NotificationIcon from "../Icons/NotificationIcon";

const MobileTopBar = ({ onOpen }) => {
  const bg = useColorModeValue(
    "backgrounds.light.e000",
    "backgrounds.dark.e000"
  );

  return (
    <HStack w="full" p="15px" bg={bg}>
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
