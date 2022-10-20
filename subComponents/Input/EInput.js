import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
	Box,
	FormLabel,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Text,
	Textarea,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EButton } from "../eButton";

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
	isDeletable = false,
	onDelete,
	marginZero,
	h = "266px",
	setRef,
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
				
				<ViewIcon />
			) : (
				<ViewOffIcon />
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
			mt={isDeletable ? 4 : marginZero ? 0 : 2}
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
			{!isDeletable && type === "textarea" && maxCharacters && (
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
			{isDeletable && (
				<FormLabel
					position={"absolute"}
					top={"-14px"}
					right={"22px"}
					display={"block"}
					fontSize={"12px"}
					fontWeight={500}
					color={labelColor}
					borderRadius={"5px"}
					mr={"auto"}
					p={0}
					bg={labelBGColor}
					zIndex={2}
					w={8}
					textAlign={"center"}
					rounded={"full"}
				>
					<EButton
						onClick={onDelete}
						variant={"transparent"}
						p={1}
						h={7}
						w={7}
						rounded={"full"}
					>
						<Icon
							width="20px"
							height="20px"
							viewBox="0 0 24 24"
							fill={iconRightColor}
						>
							<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
						</Icon>
					</EButton>
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
						h={h}
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
							h={h}
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
								setIsFocused(value || false);
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
						ref={setRef}
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
