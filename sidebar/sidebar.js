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
			<CustomButton
				path={"https://main.edvora.me/"}
				active={origin.includes("main.edvora.me") && router.pathname === "/"}
				isDark={isDark}
			>
				<CustomIcon>
					<path d="M10.8333 2.5V7.5H17.5V2.5H10.8333ZM10.8333 17.5H17.5V9.16667H10.8333V17.5ZM2.5 17.5H9.16667V12.5H2.5V17.5ZM2.5 10.8333H9.16667V2.5H2.5V10.8333Z" />
				</CustomIcon>
			</CustomButton>

			<CustomButton
				path={"https://classrooms.edvora.me/"}
				active={origin.includes("classrooms.edvora.me")}
				isDark={isDark}
			>
				<CustomIcon>
					<path d="M10 5.6886C10.7735 5.6886 11.5154 5.99589 12.0624 6.54287C12.6094 7.08985 12.9167 7.83172 12.9167 8.60527C12.9167 9.37881 12.6094 10.1207 12.0624 10.6677C11.5154 11.2146 10.7735 11.5219 10 11.5219C9.22645 11.5219 8.48459 11.2146 7.93761 10.6677C7.39062 10.1207 7.08333 9.37881 7.08333 8.60527C7.08333 7.83172 7.39062 7.08985 7.93761 6.54287C8.48459 5.99589 9.22645 5.6886 10 5.6886ZM4.16667 7.77193C4.63333 7.77193 5.06667 7.89693 5.44167 8.12193C5.31667 9.3136 5.66667 10.4969 6.38333 11.4219C5.96667 12.2219 5.13333 12.7719 4.16667 12.7719C3.50363 12.7719 2.86774 12.5085 2.3989 12.0397C1.93006 11.5709 1.66667 10.935 1.66667 10.2719C1.66667 9.60889 1.93006 8.97301 2.3989 8.50416C2.86774 8.03532 3.50363 7.77193 4.16667 7.77193ZM15.8333 7.77193C16.4964 7.77193 17.1323 8.03532 17.6011 8.50416C18.0699 8.97301 18.3333 9.60889 18.3333 10.2719C18.3333 10.935 18.0699 11.5709 17.6011 12.0397C17.1323 12.5085 16.4964 12.7719 15.8333 12.7719C14.8667 12.7719 14.0333 12.2219 13.6167 11.4219C14.3333 10.4969 14.6833 9.3136 14.5583 8.12193C14.9333 7.89693 15.3667 7.77193 15.8333 7.77193ZM4.58333 16.3136C4.58333 14.5886 7.00833 13.1886 10 13.1886C12.9917 13.1886 15.4167 14.5886 15.4167 16.3136V17.7719H4.58333V16.3136ZM0 17.7719V16.5219C0 15.3636 1.575 14.3886 3.70833 14.1053C3.21667 14.6719 2.91667 15.4553 2.91667 16.3136V17.7719H0ZM20 17.7719H17.0833V16.3136C17.0833 15.4553 16.7833 14.6719 16.2917 14.1053C18.425 14.3886 20 15.3636 20 16.5219V17.7719Z" />
					<path d="M3.73723 2.85522H16.2635V6.35523C16.9536 6.35523 17.5771 6.61827 18.053 7.038V2.4612C18.053 1.71362 17.451 1.10522 16.7109 1.10522H3.28986C2.54974 1.10522 1.94775 1.71362 1.94775 2.4612V7.038C2.42364 6.61827 3.04744 6.35523 3.73723 6.35523V2.85522Z" />
				</CustomIcon>
			</CustomButton>

			<CustomButton
				path={"https://main.edvora.me/i"}
				active={origin.includes("main.edvora.me") && router.pathname === "/i"}
				isDark={isDark}
			>
				<CustomIcon>
					<g clipPath="url(#clip0_20_146)">
						<path d="M10.0002 3.33337C10.8842 3.33337 11.7321 3.68456 12.3572 4.30968C12.9823 4.93481 13.3335 5.78265 13.3335 6.66671C13.3335 7.55076 12.9823 8.39861 12.3572 9.02373C11.7321 9.64885 10.8842 10 10.0002 10C9.11611 10 8.26826 9.64885 7.64314 9.02373C7.01802 8.39861 6.66683 7.55076 6.66683 6.66671C6.66683 5.78265 7.01802 4.93481 7.64314 4.30968C8.26826 3.68456 9.11611 3.33337 10.0002 3.33337ZM10.0002 11.6667C13.6835 11.6667 16.6668 13.1584 16.6668 15V16.6667H3.3335V15C3.3335 13.1584 6.31683 11.6667 10.0002 11.6667Z" />
						<path d="M17.2915 0.833252C17.1258 0.833252 16.9668 0.8991 16.8496 1.01631C16.7324 1.13352 16.6665 1.29249 16.6665 1.45825C16.6665 1.62401 16.7324 1.78298 16.8496 1.90019C16.9668 2.0174 17.1258 2.08325 17.2915 2.08325C17.4573 2.08325 17.6163 2.0174 17.7335 1.90019C17.8507 1.78298 17.9165 1.62401 17.9165 1.45825C17.9165 1.29249 17.8507 1.13352 17.7335 1.01631C17.6163 0.8991 17.4573 0.833252 17.2915 0.833252ZM17.1415 2.82075C16.6457 2.86242 15.2915 3.94159 15.2915 3.94159C15.2082 4.00409 15.2332 3.99992 15.2999 4.11659C15.3665 4.22908 15.3582 4.23742 15.4374 4.18325C15.5207 4.12909 15.6582 4.04158 15.8874 3.89992C16.7707 3.33325 16.029 4.64159 15.6499 6.84575C15.4999 7.93742 16.4832 7.37492 16.7374 7.20825C16.9874 7.04575 17.6582 6.58325 17.7249 6.53742C17.8165 6.47492 17.7499 6.42492 17.679 6.32075C17.629 6.24992 17.579 6.29992 17.579 6.29992C17.3082 6.47908 16.8124 6.85408 16.7457 6.61658C16.6665 6.37908 17.1749 4.74992 17.454 3.62909C17.4999 3.36242 17.6249 2.77909 17.1415 2.82075Z" />
					</g>
					<defs>
						<clipPath id="clip0_20_146">
							<rect width="20" height="20" />
						</clipPath>
					</defs>
				</CustomIcon>
			</CustomButton>
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
			position="fixed"
			left={0}
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
	);
};

export default Sidebar;
