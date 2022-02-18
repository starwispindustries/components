import { Button } from "@chakra-ui/react";

export function EButton(props) {
	return <Button {...props}>{props.children}</Button>;
}
