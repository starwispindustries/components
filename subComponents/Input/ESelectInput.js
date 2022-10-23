import React from "react";

import { Box, Select } from "@chakra-ui/react";
import EInput from "./EInput";

const ESelectInput = ({
	value,
	onChange,
	label = "",
	options = [],
	name,
	isDisabled,
	isInvalid,
	error,
	isRequired,
	placeholder,
	isFullWidth,
	leftIcon,
	rightIcon,
	maxW,
	marginZero,
	...rest
}) => {
	return (
		<Box
			position={"relative"}
			w={isFullWidth ? "full" : "302px"}
			maxW={maxW || "full"}
			mt={ marginZero ? "0 !important" : "unset"}
		>
			<EInput
				leftIcon={leftIcon}
				rightIcon={rightIcon}
				isFullWidth={isFullWidth}
				zIndex={0}
				label={label}
				tabIndex={-1}
				isReadOnly
				isDisabled={isDisabled}
				value={value}
				placeholder={"placeholder"}
				error={error}
				onChange={() => {}}
				maxW={maxW}
			/>
			<Select
				position={"absolute"}
				zIndex={1}
				top={"8px"}
				name={name}
				w={isFullWidth ? "full" : "302px"}
				maxW={maxW || "full"}
				h={"52px"}
				color={isDisabled && "transparent"}
				opacity={0}
				isDisabled={isDisabled}
				isInvalid={isInvalid || error}
				isRequired={isRequired}
				value={value}
				onChange={onChange}
				{...rest}
			>
				{options.map((option, ind) => (
					<option key={ind} value={option} color="black">
						{option}
					</option>
				))}
			</Select>
		</Box>
	);
};

export default ESelectInput;
