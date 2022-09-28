import { HStack, IconButton, Spacer, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import useProfile from "../hooks/useProfile";

import HamburgerMenu from "../Icons/HamburgerMenu";
import NotificationIcon from "../Icons/NotificationIcon";
import NotificationPopup from "../subComponents/Notifications/NotificationPopupMobile";
import UserAvatar from "../subComponents/UserAvatar";
import { readCookie } from "../utils/apiCall";

const MobileTopBar = ({ onOpen }) => {
    const profile = useProfile();
    const username = readCookie("username");

    const bg = useColorModeValue("backgrounds.light.e000", "backgrounds.dark.e000");

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
                        fullName={profile?.full_name == undefined ? username : profile?.full_name}
                        filekey={profile?.profile_key}
                        size="xs"
                    />
                </HStack>
            </HStack>
        </>
    );
};

export default MobileTopBar;
