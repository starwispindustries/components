import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
	Box,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Text,
	Textarea,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

const EInput = ({
	type,
	inputMode,
	name = type,
	label = name,
	value,
	onChange,
	onFocus,
	onBlur,
	placeholder = label,
	leftIcon,
	rightIcon,
	isFullWidth,
	error,
	isInvalid,
	isDisabled,
	isReadOnly,
	isRequired,
	autoComplete,
	maxCharacters,
	maxW,
	...rest
}) => {
	const borderColor = useColorModeValue("#f0f0f0", "text.dark.disabled");
	const errorBorderColor = useColorModeValue("red.e200", "red.e200");
	const focusBorderColor = useColorModeValue(
		"primary.light.200",
		"primary.dark.200"
	);
	const hoverBorderColor = useColorModeValue(
		"primary.light.200",
		"primary.dark.200"
	);
	const placeHolderColor = useColorModeValue(
		"text.light.disabled",
		"text.dark.disabled"
	);
	const textColor = useColorModeValue(
		"text.light.h1_body",
		"text.dark.h1_body"
	);
	const labelColor = useColorModeValue(
		"text.light.h3_captions",
		"text.dark.h3_captions"
	);
	const labelBGColor = useColorModeValue(
		"backgrounds.light.e000",
		"backgrounds.dark.e000"
	);
	const iconLeftColor = useColorModeValue(
		"text.light.disabled",
		"text.dark.disabled"
	);
	const iconRightColor = useColorModeValue(
		"text.light.subtext",
		"text.dark.subtext"
	);

	const [isFocused, setIsFocused] = useState(value);

	const [passwordVisible, setPasswordVisible] = useState(false);
	let handleToggle = (e) => {
		e.preventDefault();
	};

	switch (type) {
		case "text":
			inputMode = inputMode || "text";
			break;

		case "password":
			handleToggle = (e) => {
				e.preventDefault();
				setPasswordVisible((visibility) => !visibility);
			};
			rightIcon = isDisabled ? (
				""
			) : passwordVisible ? (
				<ViewOffIcon />
			) : (
				<ViewIcon />
			);
			break;

		case "email":
			inputMode = inputMode || "email";
			break;

		case "tel":
			inputMode = inputMode || "tel";
			break;

		case "url":
			inputMode = inputMode || "url";
			break;
	}

	return (
		<Box
			position={"relative"}
			mt={2}
			w={isFullWidth ? "full" : "302px"}
			maxW={maxW || "full"}
		>
			{label && (
				<FormLabel
					position={"absolute"}
					top={isFocused || value ? "-8px" : "14px"}
					left={isFocused || value ? "13px" : leftIcon ? "42px" : "10px"}
					display={"block"}
					fontSize={isFocused || value ? "12px" : "16px"}
					fontWeight={500}
					color={labelColor}
					borderRadius={"5px"}
					pointerEvents={"none"}
					mr={"auto"}
					px={"7px"}
					bg={labelBGColor}
					zIndex={2}
					transition={"all 0.15s ease-in-out"}
				>
					{label}
				</FormLabel>
			)}
			{type === "textarea" && maxCharacters && (
				<FormLabel
					position={"absolute"}
					top={"-8px"}
					right={"22px"}
					display={"block"}
					fontSize={"12px"}
					fontWeight={500}
					color={labelColor}
					borderRadius={"5px"}
					mr={"auto"}
					px={"7px"}
					bg={labelBGColor}
					zIndex={2}
					w={10}
					textAlign={"center"}
				>
					<Box>{maxCharacters}</Box>
				</FormLabel>
			)}
			<InputGroup w={isFullWidth ? "full" : "302px"} maxW={maxW || "full"}>
				{leftIcon && (
					<InputLeftElement
						pointerEvents="none"
						color={iconLeftColor}
						h={"52px"}
						mt={"2px"}
						ml={1}
					>
						{leftIcon}
					</InputLeftElement>
				)}

				{type === "textarea" ? (
					<Box
						h={"266px"}
						overflow={"hidden"}
						w={isFullWidth ? "full" : "302px"}
						border={"1px solid"}
						borderColor={
							isDisabled
								? borderColor
								: isInvalid
								? errorBorderColor
								: focusBorderColor
						}
						borderRadius={"10px"}
						bg={"transparent"}
					>
						<Textarea
							resize={"none"}
							name={name}
							w={isFullWidth ? "full" : "302px"}
							h={"266px"}
							maxW={maxW || "full"}
							_placeholder={{
								color: placeHolderColor,
								fontSize: "inherit",
								fontWeight: "inherit",
							}}
							autoComplete={autoComplete}
							border={"0px solid"}
							borderColor={"transparent"}
							borderRadius={"10px"}
							bg={"transparent"}
							color={textColor}
							fontSize={"16px"}
							fontWeight={400}
							inputMode={inputMode}
							isDisabled={isDisabled}
							isInvalid={isInvalid || error}
							isRequired={isRequired}
							placeholder={""}
							value={value}
							onChange={onChange}
							onFocus={(e) => {
								setIsFocused(true);
								onFocus && onFocus(e);
							}}
							onBlur={(e) => {
								setIsFocused(false);
								onBlur && onBlur(e);
							}}
							{...rest}
						></Textarea>
					</Box>
				) : (
					<Input
						name={name}
						type={
							type !== "password" ? type : passwordVisible ? "text" : "password"
						}
						w={isFullWidth ? "full" : "302px"}
						maxW={maxW || "full"}
						h={"52px"}
						_focus={{ borderColor: focusBorderColor, borderWidth: "1px" }}
						_hover={{ borderColor: hoverBorderColor }}
						_invalid={{ borderColor: errorBorderColor, borderWidth: "1px" }}
						_placeholder={{
							color: placeHolderColor,
							fontSize: "inherit",
							fontWeight: "inherit",
						}}
						_disabled={{ borderColor: borderColor, pointerEvents: "none" }}
						tabIndex={isDisabled ? "-1" : "1"}
						autoComplete={autoComplete}
						border={"1px solid"}
						borderColor={focusBorderColor}
						borderRadius={"10px"}
						outline={"none"}
						outlineColor={"transparent"}
						bg={"transparent"}
						color={textColor}
						fontSize={"16px"}
						fontWeight={400}
						inputMode={inputMode}
						isDisabled={isDisabled}
						isInvalid={isInvalid || error}
						isRequired={isRequired}
						placeholder={""}
						value={value}
						onChange={onChange}
						onFocus={(e) => {
							setIsFocused(true);
							onFocus && onFocus(e);
						}}
						onBlur={(e) => {
							setIsFocused(value || false);
							onBlur && onBlur(e);
						}}
						{...rest}
					/>
				)}
				{rightIcon && (
					<InputRightElement
						h={"52px"}
						color={iconRightColor}
						cursor={"pointer"}
						onClick={handleToggle}
					>
						{rightIcon}
					</InputRightElement>
				)}
			</InputGroup>
			{error && (
				<Text
					position={"absolute"}
					mt={"2px"}
					ml={"16px"}
					fontSize={"14px"}
					lineHeight={"17px"}
					fontWeight={"300"}
					color={errorBorderColor}
				>
					{error}
				</Text>
			)}
		</Box>
	);
};

export default EInput;
