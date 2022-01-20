import { Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const Header = ({ goback, children, ...props }) => {
	const arrowColor = useColorModeValue("primary.light.200", "primary.dark.200");
	const bg = useColorModeValue("primary.light._000", "primary.dark._000");
	return (
		<Flex
			transition="opacity 0.5s"
			as="nav"
			h="63px"
			p="0 15px"
			bg={bg}
			width="full"
			align="center"
			{...props}
		>
			{goback && (
				<IconButton
					variant={"transparent"}
					w="28px"
					h="28px"
					_focus={{ outline: "none" }}
					bg={"transparent"}
					borderRadius={"full"}
					color={arrowColor}
					onClick={(e) => goback(e)}
				>
					<ChevronLeftIcon w={"28px"} h={"28px"} />
				</IconButton>
			)}
			{children}
		</Flex>
	);
};

export default Header;
