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
  useDisclosure,
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
import { useSelector } from "react-redux";
import { READ_STORAGE } from "../../src/constants";

const handleLogout = async () => {
  try {
    const res = await logout();
    if (res?.success) {
      toast.success("Logged out!");
      window.location = MAIN_URL + "l";
    }
  } catch (err) {

    toast.error("Error Logging out!");
  }
};

const ProfilePopup = ({ children }) => {
  const bg = useColorModeValue("primary.light._000", "primary.dark._000");

  const { isOpen, onClose, onOpen } = useDisclosure()

  const global_permissions = useSelector(state => state?.commonData?.profile?.global_permissions)

  return (
    <>
      <Popover isLazy onOpen={onOpen} onClose={onClose} isOpen={isOpen} closeOnBlur={false}>
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
              url={`${MAIN_URL}i?tab=Account`}
              onClick={onClose}
            />
            <Label
              LabelIcon={Help}
              title="Help & Feedback"
              url={`${MAIN_URL}i?tab=FAQs`} // Add proper redirection to FAQ
              onClick={onClose}
            />
            {global_permissions?.includes(READ_STORAGE) &&
              <Label
                LabelIcon={Storage}
                title="Storage"
                url={`${MAIN_URL}storage`}
                onClick={onClose}
              />
            }
            <LogoutLabel />
          </VStack>
        </PopoverContent>
      </Popover>
    </>
  );
};

const Label = ({ title, LabelIcon, color = null, url = "", onClick = () => { } , ...props}) => {
  const { colorMode } = useColorMode();

  const colorHex = color ?? (colorMode == "light" ? "#733D47" : "#BF9B9B");

  return (
    <Link href={url}>
      <Flex
        w="full"
        gap="20px"
        cursor={"pointer"}
        onClick={() => onClick()}
        {...props}
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

  return (
    <HStack w="full" spacing="20px">
      <UserAvatar
        fullName={profile?.full_name}
        filekey={profile?.profile_key}
        borderRadius={"15px"}
      />
      <VStack w="full" alignItems={"flex-start"} spacing="2px">
        <Text size="lg" fontWeight={"bold"} noOfLines={1} wordBreak={"break-all"}>
          {profile?.full_name}
        </Text>
        <Text size="xs">{profile?.username}</Text>
      </VStack>
    </HStack>
  );
};

export const LogoutLabel = ({...props}) => (
  <Label
    LabelIcon={Logout}
    title="Logout"
    color="red"
    onClick={handleLogout}
    {...props}
  />
)

export default ProfilePopup;
