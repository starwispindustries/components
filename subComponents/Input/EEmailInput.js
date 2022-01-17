import { AtSignIcon } from "@chakra-ui/icons";
import React from "react";
import EInput from "./EInputField";

const EEmailInput = ({
	value,
	onChange,
	label = "Email address",
	leftIcon = <AtSignIcon />,
	autoComplete = "email",
	inputMode = "email",
	placeholder = "example@email.com",
	...rest
}) => {
	return (
		<EInput
			type={"email"}
			value={value}
			onChange={onChange}
			label={label}
			placeholder={placeholder}
			autoComplete={autoComplete}
			inputMode={inputMode}
			leftIcon={leftIcon}
			{...rest}
		/>
	);
};

export default EEmailInput;
