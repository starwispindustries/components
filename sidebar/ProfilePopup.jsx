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

const ProfilePopup = ({ children }) => {
  const bg = useColorModeValue("primary.light._000", "primary.dark._000");

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
            <Label LabelIcon={Profile} title="View Profile" />
            <Label LabelIcon={Help} title="Help & Feedback" />
            <Label LabelIcon={Storage} title="Storage" />
            <Label LabelIcon={Logout} title="Logout" color="red" />
          </VStack>
        </PopoverContent>
      </Popover>
    </>
  );
};

const Label = ({ title, LabelIcon, color = null }) => {
  //   const iconColor = useColorModeValue(
  //     "primary.light.e100",
  //     "primary.dark.e100"
  //   );

  const { colorMode } = useColorMode();

  const colorHex = color ?? (colorMode == "light" ? "#733D47" : "#BF9B9B");

  return (
    <Flex w="full" gap="20px">
      <Box w="50px">
        <LabelIcon color={colorHex} />
      </Box>
      <Text w="full" color={colorHex}>
        {title}
      </Text>
    </Flex>
  );
};

export default ProfilePopup;
