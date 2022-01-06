import { Button } from "@chakra-ui/react";

export function EButton (props) {
    return (
        <Button _focus={{outline: 'none'}} {...props}>
            {props.children}
        </Button>
    )
}