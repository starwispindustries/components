import React from "react";
import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import Profile from "../Icons/ProfileIcons/Profile";
import Help from "../Icons/ProfileIcons/Help";
import Logout from "../Icons/ProfileIcons/Logout";
import Storage from "../Icons/ProfileIcons/Storage";
import Link from "next/link";
import { MAIN_URL } from "../constants";

const ProfilePopup = ({ children }) => {
  const bg = useColorModeValue("primary.light._000", "primary.dark._000");

  const handleLogout = () => {};

  return (
    <>
      <Popover isLazy placement="right-end">
        {children}
        <PopoverContent
          borderRadius={"20px"}
          _focus={{ boxShadow: "none" }}
          ml="10px"
          bg={bg}
          p="40px"
          outline="none"
        >
          <VStack spacing={"20px"}>
            <Label
              LabelIcon={Profile}
              title="View Profile"
              url={`${MAIN_URL}i`}
            />
            <Label
              LabelIcon={Help}
              title="Help & Feedback"
              url={`${MAIN_URL}i`} // Add proper redirection to FAQ
            />
            <Label
              LabelIcon={Storage}
              title="Storage"
              url={`${MAIN_URL}storage`}
            />
            <Label
              LabelIcon={Logout}
              title="Logout"
              color="red"
              onClick={handleLogout}
            />
          </VStack>
        </PopoverContent>
      </Popover>
    </>
  );
};

const Label = ({ title, LabelIcon, color = null, url = "", onClick }) => {
  //   const iconColor = useColorModeValue(
  //     "primary.light.e100",
  //     "primary.dark.e100"
  //   );

  const { colorMode } = useColorMode();

  const colorHex = color ?? (colorMode == "light" ? "#733D47" : "#BF9B9B");

  return (
    <Link href={url}>
      <Flex
        w="full"
        gap="20px"
        cursor={"pointer"}
        onClick={() => (url == "" ? onClick() : () => {})}
      >
        <Box w="50px">
          <LabelIcon color={colorHex} />
        </Box>
        <Text w="full" color={colorHex}>
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

export default ProfilePopup;
