import {
  HStack,
  IconButton,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import HamburgerMenu from "../Icons/HamburgerMenu";
import NotificationIcon from "../Icons/NotificationIcon";
import NotificationPopup from "../subComponents/Notifications/NotificationPopup";
import UserAvatar from "../subComponents/UserAvatar";

const MobileTopBar = ({ onOpen }) => {
  const bg = useColorModeValue(
    "backgrounds.light.e000",
    "backgrounds.dark.e000"
  );

  const [showNoti, setShowNoti] = useState(false);

  return (
    <>
      {showNoti && <NotificationPopup />}

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

        <HStack spacing={"10px"}>
          <IconButton
            icon={<NotificationIcon />}
            w="30px"
            h="30px"
            bg="transparent"
            _hover={{ bg: "transparent" }}
            onClick={() => setShowNoti(!showNoti)}
          />

          <UserAvatar
            fullName={"Ciddarth Raaj"}
            filekey="f474760d-4ee5-4f14-b93f-8871ab5735db"
            size="xs"
          />
        </HStack>
      </HStack>
    </>
  );
};

export default MobileTopBar;
