import React from "react";
import { CloseButton, Flex, Slide, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import useBrowserValid from "../../hooks/useBrowserValid";

const BrowserVersionCheckHeader = () => {
    const {isBrowserValid, browserVersion} = useBrowserValid();
    const bg = useColorModeValue("backgrounds.light.e100", "backgrounds.dark.e100");
    const hover = useColorModeValue("backgrounds.light.e200", "backgrounds.dark.e200");

    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

    return !isBrowserValid ? (
        <Slide direction="top" in={isOpen} style={{ zIndex: "9999" }}>
            <Flex
                //position={"fixed"}
                w={"100vw"}
                zIndex={"9999"}
                h={"fit-content"}
                p={"4"}
                bg={bg}
                _hover={{ bg: hover }}
                transition={"all 300ms ease"}
                boxShadow={"0 0.4rem 0.25rem rgba(0, 0, 0, 0.2);"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                borderBottomRadius={"6px"}
            >
                <Text>
                    Your browser version <Text as="b">{browserVersion}</Text> does not meet the
                    supported minimum requirements! Please consider updating it to the latest
                    version.
                </Text>
                <CloseButton onClick={onClose} />
            </Flex>
        </Slide>
    ) : null;
};

export default BrowserVersionCheckHeader;
