import React from "react";
import {
  Box,
  Flex,
  HStack,
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
import useProfile from "../hooks/useProfile";
import UserAvatar from "../subComponents/UserAvatar";
import { logout } from "../helpers/authHelper";
import { toast } from "react-toastify";

const ProfilePopup = ({ children }) => {
  const bg = useColorModeValue("primary.light._000", "primary.dark._000");

  const handleLogout = async () => {
    try {
      const res = await logout();
      if (res?.success) {
        toast.success("Logged out!");
        window.location = "/l";
      }
    } catch (err) {
      console.log(err);
      toast.error("Error Logging out!");
    }
  };

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
            <PopoverHeader />

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
        <Flex w="65px" justifyContent={"center"}>
          <LabelIcon color={colorHex} />
        </Flex>
        <Text w="full" color={colorHex}>
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

const PopoverHeader = () => {
  const profile = useProfile();

  console.log("CIDD", profile);

  return (
    <HStack w="full" spacing="20px">
      <UserAvatar
        fullName={profile?.full_name}
        filekey={profile?.profile_key}
        borderRadius={"15px"}
      />
      <VStack w="full" alignItems={"flex-start"} spacing="2px">
        <Text size="lg" fontWeight={"bold"} noOfLines={2}>
          {profile?.full_name}
        </Text>
        <Text size="xs">{profile?.username}</Text>
      </VStack>
    </HStack>
  );
};

export default ProfilePopup;
