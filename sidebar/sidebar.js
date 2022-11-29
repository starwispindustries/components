import {
	Box,
	Button,
	Drawer,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerContent,
	VStack,
	useColorModeValue,
	Center,
	Divider,
	useDisclosure,
	Text,
	PopoverTrigger,
	Flex,
	Tooltip,
	Link,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import EdvoraIcon from "../../src/icons/EdvoraIcon";

import { CLASSROOM_URL, LECTURES_URL, MAIN_URL, TIMELINE_URL } from "../constants";
import useProfile from "../hooks/useProfile";
import UserAvatar from "../subComponents/UserAvatar";
import { readCookie } from "../utils/apiCall";
import { classroom, information, lectures, main, settings } from "./IconsList";
import MobileTopBar from "./MobileTopBar";
import ProfilePopup, { LogoutLabel } from "./ProfilePopup";

const ITEMS = [
	{
		id: 1,
		title: "Dashboard",
		url: MAIN_URL,
		icon: main,
		tooltip: "Dashboard"
	},
	{
		id: 2,
		title: "Classroom",
		url: CLASSROOM_URL,
		icon: classroom,
		tooltip: "Classrooms"
	},
	{
		id: 3,
		title: "Information",
		url: TIMELINE_URL,
		icon: information,
		tooltip: "Timeline"
	},
	{
		id: 4,
		title: "Lectures",
		url: LECTURES_URL,
		icon: lectures,
		tooltip: "Lectures"
	},
	{
		id: 5,
		title: "Settings",
		url: MAIN_URL + "i",
		icon: settings,
		homeSettings: true,
		tooltip: "Settings",
	},
]

const CustomIcon = ({ children }) => {
	return (
		<Icon viewBox="0 0 20 20" fill="inherit" w="20px" h="20px">
			{children}
		</Icon>
	);
};

const CustomButton = ({ children, tooltip, path, active, isDark, sidebar_variant, onClick = () => {} }) => {

	return (
		<Tooltip label={sidebar_variant == "sidebar" ? tooltip : ""} aria-label='A tooltip' placement='right' >
			<Link href={path} w={"full"}>
				<Button
					w="90%"
					key={"" + isDark}
					variant={active ? "active_sidebar_button" : "sidebar_button"}
					size="sm"
					_focus={{ outline: "none" }}
					justifyContent={sidebar_variant == "sidebar" ? "center" : "flex-start"}
					onClick={onClick}
				>
					{children}
				</Button>
			</Link>
		</Tooltip>
	);
};

const SidebarContent = ({ isDark, isDesktop, sidebar_variant, onClick = () => {} }) => {
	const profile = useSelector(state => state?.commonData?.profile);
	const username = readCookie("username");

	const origin =
		typeof window !== "undefined" && window.location.origin
			? window.location.origin + "/"
			: "";

	const color = useColorModeValue("primary.dark.200", "primary.light.200")
	const selectedColor = useColorModeValue("primary.light._000", "primary.dark._000")
	
	return (
        <VStack justifyContent={"space-between"} w={"full"}>
            <VStack mt="29px" spacing="18px" w={"full"}>
                {ITEMS.map((item) => {
                    const pathname = typeof window != "undefined" ? window.location.pathname : "";
                    const isActive = origin.includes(item.url) && pathname != "/i";
                    const isSettings = item?.homeSettings;
                    const active = isSettings && pathname == "/i" ? isSettings : isActive;

                    return (
                        <CustomButton
                            key={item.url + "-key"}
                            path={item.url}
                            active={active}
                            isDark={isDark}
                            sidebar_variant={sidebar_variant}
                            tooltip={item?.tooltip}
                            onClick={onClick}
                        >
                            <CustomIcon>{item.icon}</CustomIcon>
                            {!isDesktop && (
                                <Text ml={5} size={"lg"} color={active ? selectedColor : color}>
                                    {item?.title}
                                </Text>
                            )}
                        </CustomButton>
                    );
                })}
            </VStack>

            {sidebar_variant === "sidebar" ? (
                <ProfilePopup>
                    <PopoverTrigger>
                        <Flex
                            alignSelf={"baseline"}
                            position={"absolute"}
                            bottom={8}
                            cursor={"pointer"}
                        >
                            <UserAvatar
                                filekey={profile?.profile_key}
                                fullName={
                                    profile?.full_name == undefined ? username : profile?.full_name
                                }
                                borderRadius="15px"
                            />
                        </Flex>
                    </PopoverTrigger>
                </ProfilePopup>
            ) : (
                <Flex alignSelf={"baseline"} position={"absolute"} left={"50%"} transform={"translate(-50%,0)"} bottom={8} cursor={"pointer"}>
                    <LogoutLabel gap={"0"}/>
                </Flex>
            )}
        </VStack>
    );
};

const Sidebar = ({ variant, isDark, isDesktop }) => {
	const bg = useColorModeValue(
		"backgrounds.light.e000",
		"backgrounds.dark.e000"
	);
	const borderColor = useColorModeValue(
		"primary.light.200",
		"primary.dark.200"
	);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const profile = useProfile()

	if (profile?.username) {
		return variant === "sidebar" ? (
			<Box
				p={5}
				w="84px"
				top={0}
				h="100vh"
				bg={bg}
				zIndex={1}
				position={"relative"}
			>
				<Center w="full" h="54px" mb="5">
					<Image src="/ed_logo.png" alt="" width="21px" height="21px" />
				</Center>
				<Divider borderColor={borderColor} />
				<SidebarContent isDark={isDark} isDesktop={isDesktop} sidebar_variant={variant} />
			</Box>
		) : (
			<>
				<MobileTopBar onOpen={onOpen} />
				<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
					<DrawerOverlay>
						<DrawerContent bg={bg}>
							<DrawerCloseButton />
							<DrawerHeader>
								<EdvoraIcon width="140" height="25" />
							</DrawerHeader>
							<DrawerBody>
								<SidebarContent onClick={onClose} isDark={isDark} isDesktop={isDesktop} sidebar_variant={variant} />
							</DrawerBody>
						</DrawerContent>
					</DrawerOverlay>
				</Drawer>
			</>
		);
	}
	return null
};

export default Sidebar;
