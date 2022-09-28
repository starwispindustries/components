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
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { CLASSROOM_URL, LECTURES_URL, MAIN_URL, TIMELINE_URL } from "../constants";
import { classroom, lectures, main, settings, studentInfo } from "./IconsList";
import MobileTopBar from "./MobileTopBar";

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
		id: 4,
		title: "Settings",
		url: MAIN_URL + "i",
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

const CustomButton = ({ children, path, active, isDark }) => {
	return (
		<Link href={path}>
			<Button
				w="100%"
				key={"" + isDark}
				variant={active ? "active_sidebar_button" : "sidebar_button"}
				size="sm"
				_focus={{ outline: "none" }}
			>
				{children}
			</Button>
		</Link>
	);
};

const SidebarContent = ({ isDark }) => {
	const router = useRouter();
	const origin =
		typeof window !== "undefined" && window.location.origin
			? window.location.origin
			: "";

	return (
		<VStack mt="29px" spacing="9px">
			{
				ITEMS.map(item => (
					<CustomButton
						path={item.url}
						active={origin.includes(item.url)}
						isDark={isDark}
					>
						<CustomIcon>
							{item.icon}
						</CustomIcon>
					</CustomButton>
				))
			}
		</VStack>
	);
};

const Sidebar = ({ variant, isDark }) => {
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
			h="100%"
			bg={bg}
			zIndex={1}
		>
			<Center w="full" h="54px" mb="5">
				<Image src="/ed_logo.png" alt="" width="21px" height="21px" />
			</Center>
			<Divider borderColor={borderColor} />
			<SidebarContent isDark={isDark} />
		</Box>
	) : (
		<>
			<MobileTopBar onOpen={onOpen} />
			<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Chakra-UI</DrawerHeader>
						<DrawerBody>
							<SidebarContent onClick={onClose} isDark={isDark} />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

export default Sidebar;
