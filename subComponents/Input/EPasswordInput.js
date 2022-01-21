import React from "react";
import EInput from "./EInput";

const EPasswordInput = ({
	value,
	onChange,
	label = "Password",
	leftIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="17"
			height="17"
			viewBox="0 0 17 17"
			fill="currentColor"
		>
			<path d="M15.5846 12.7494V15.5827H12.7513V13.4577H10.6263V11.3327H8.5013L6.90047 9.73185C6.51089 9.85227 6.10005 9.91602 5.66797 9.91602C4.5408 9.91602 3.45979 9.46825 2.66277 8.67122C1.86574 7.87419 1.41797 6.79319 1.41797 5.66602C1.41797 4.53885 1.86574 3.45784 2.66277 2.66081C3.45979 1.86378 4.5408 1.41602 5.66797 1.41602C6.79514 1.41602 7.87614 1.86378 8.67317 2.66081C9.4702 3.45784 9.91797 4.53885 9.91797 5.66602C9.91797 6.0981 9.85422 6.50893 9.7338 6.89852L15.5846 12.7494ZM4.95964 3.54102C4.58391 3.54102 4.22358 3.69027 3.9579 3.95595C3.69222 4.22162 3.54297 4.58196 3.54297 4.95768C3.54297 5.33341 3.69222 5.69374 3.9579 5.95942C4.22358 6.22509 4.58391 6.37435 4.95964 6.37435C5.33536 6.37435 5.69569 6.22509 5.96137 5.95942C6.22705 5.69374 6.3763 5.33341 6.3763 4.95768C6.3763 4.58196 6.22705 4.22162 5.96137 3.95595C5.69569 3.69027 5.33536 3.54102 4.95964 3.54102Z" />
		</svg>
	),
	rightIcon,
	autoComplete = "current-password",
	placeholder = "current password",
	...rest
}) => {
	return (
		<EInput
			type={"password"}
			value={value}
			onChange={onChange}
			label={label}
			placeholder={placeholder}
			autoComplete={autoComplete}
			leftIcon={leftIcon}
			rightIcon={rightIcon}
			{...rest}
		/>
	);
};

export default EPasswordInput;
