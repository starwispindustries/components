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
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import EdvoraIcon from "../../src/icons/EdvoraIcon";

import { CLASSROOM_URL, LECTURES_URL, MAIN_URL, TIMELINE_URL } from "../constants";
import useProfile from "../hooks/useProfile";
import UserAvatar from "../subComponents/UserAvatar";
import { readCookie } from "../utils/apiCall";
import { classroom, lectures, main, settings, studentInfo } from "./IconsList";
import MobileTopBar from "./MobileTopBar";
import ProfilePopup from "./ProfilePopup";

const ITEMS = [
	{
		id: 1,
		title: "Home",
		url: MAIN_URL,
		icon: main
	},
	{
		id: 2,
		title: "Classroom",
		url: CLASSROOM_URL,
		icon: classroom
	},
	{
		id: 3,
		title: "Student Info",
		url: TIMELINE_URL,
		icon: studentInfo
	},
	{
		id: 4,
		title: "Lectures",
		url: LECTURES_URL,
		icon: lectures
	},
	{
		id: 5,
		title: "Settings",
		url: MAIN_URL + "i/",
		icon: settings
	},
]

const CustomIcon = ({ children }) => {
	return (
		<Icon viewBox="0 0 20 20" fill="inherit" w="20px" h="20px">
			{children}
		</Icon>
	);
};

const CustomButton = ({ children, path, active, isDark, sidebar_variant }) => {
	return (
		<Link href={path}>
			<Button
				w="90%"
				key={"" + isDark}
				variant={active ? "active_sidebar_button" : "sidebar_button"}
				size="sm"
				_focus={{ outline: "none" }}
				justifyContent={sidebar_variant == "sidebar" ? "center" : "flex-start"}
			>
				{children}
			</Button>
		</Link>
	);
};

const SidebarContent = ({ isDark, isDesktop,sidebar_variant }) => {
	const profile = useProfile()
	const username = readCookie("username");

	const origin =
		typeof window !== "undefined" && window.location.origin
			? window.location.origin + "/"
			: "";

	const color = useColorModeValue("primary.dark._000", "primary.light._000")

	return (
		<VStack justifyContent={"space-between"} h="90%" w={"full"}>
			<VStack mt="29px" spacing="9px" w={"full"}>
				{
					ITEMS.map(item => (
						<CustomButton
							key={item.url + "-key"}
							path={item.url}
							active={origin.includes(item.url)}
							isDark={isDark}
							sidebar_variant={sidebar_variant}
						>
							<CustomIcon>
								{item.icon}
							</CustomIcon>
							{!isDesktop && (
								<Text ml={5} color={color}>{item?.title}</Text>
							)}
						</CustomButton>
					))
				}
			</VStack>

			<ProfilePopup>
				<PopoverTrigger>
					<Flex alignSelf={"baseline"}>
						<UserAvatar filekey={profile?.profile_key} fullName={profile?.full_name == undefined ? username : profile?.full_name} borderRadius="15px" />
					</Flex>
				</PopoverTrigger>
			</ProfilePopup>
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

	return variant === "sidebar" ? (
		<Box
			p={5}
			w="84px"
			top={0}
			h="100vh"
			bg={bg}
			zIndex={1}
		>
			<Center w="full" h="54px" mb="5">
				<Image src="/ed_logo.png" alt="" width="21px" height="21px" />
			</Center>
			<Divider borderColor={borderColor} />
			<SidebarContent isDark={isDark} isDesktop={isDesktop}/>
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
							<SidebarContent onClick={onClose} isDark={isDark} isDesktop={isDesktop} sidebar_variant={variant}/>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

export default Sidebar;
