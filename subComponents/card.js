import { useColorModeValue, Box } from "@chakra-ui/react";
import { whiten, darken } from "@chakra-ui/theme-tools";

export const CardSecondary = ({ id, children, ...props }) => {
	const card_bg = useColorModeValue(
		"backgrounds.light.e100",
		"backgrounds.dark.e100"
	);
	const hover_bg = useColorModeValue(
		darken("backgrounds.light.e100", 3),
		whiten("backgrounds.dark.e100", 15)
	);
	return (
		<Box
			key={id}
			p="12px"
			borderRadius={2}
			w="396px"
			h="124px"
			shadow="sm"
			bg={card_bg}
			transition="width  0.1s ease-in-out"
			overflow="hidden"
			_hover={{ bg: hover_bg }}
			{...props}
		>
			{children}
		</Box>
	);
};

export const CardPrimary = ({ id, children, ...props }) => {
	const card_bg = useColorModeValue(
		"backgrounds.light.e000",
		"backgrounds.dark.e000"
	);
	return (
		<Box key={id} bg={card_bg} {...props}>
			{children}
		</Box>
	);
};
