import { Box, HStack, Link, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";

import React from "react";

const AppCrashComponent = () => {
    const bgColor = useColorModeValue("backgrounds.light.e000", "backgrounds.dark.e000");
    const listItemDotBg = useColorModeValue("backgrounds.dark.e000", "backgrounds.light.e000");

    const Dot = () => <Box bg={listItemDotBg} w={2} h={2} borderRadius={"30px"}></Box>;

    const reloadWindow = () => {
        window.location.reload();
    };

    const testConnection = () => {
        console.log("test connection");
    };

    return (
        <VStack h={"100vh"} placeContent={"center"}>
            <Stack
                spacing={4}
                p={10}
                minH={96}
                maxW={"container.lg"}
                bg={bgColor}
                borderRadius={"20px"}
            >
                <Text size={"3xl"} variant={"cblackwhite"} fontWeight={700}>
                    For some reason, Edvora could&apos;t load! :(
                </Text>
                <Text size={"lg"} variant={"cblackwhite"} fontWeight={400}>
                    We&apos;re quite sorry about this! Please try the following troubleshooting
                    method to fix the problem.
                </Text>
                <Stack spacing={6}>
                    <HStack w={"full"} spacing={4}>
                        <Dot />
                        <Text size={"lg"} variant={"cblackwhite"} fontWeight={400}>
                            <Text
                                as={"span"}
                                cursor={"pointer"}
                                onClick={reloadWindow}
                                color={"blue.e100"}
                            >
                                Reload Edvora
                            </Text>{" "}
                            or even restart your browser.
                        </Text>
                    </HStack>
                    <HStack w={"full"} spacing={4}>
                        <Dot />
                        <Text
                            size={"lg"}
                            cursor={"pointer"}
                            variant={"cblackwhite"}
                            fontWeight={400}
                        >
                            <Text as={"span"} onClick={testConnection} color={"blue.e100"}>
                                Test your connection.
                            </Text>{" "}
                            to Edvora&apos;s servers.
                        </Text>
                    </HStack>
                    <HStack w={"full"} spacing={4}>
                        <Dot />
                        <Text size={"lg"} variant={"cblackwhite"} fontWeight={400}>
                            Make sure your security software isn&apos;t blocking Edvora. or even
                            restart your browser.
                        </Text>
                    </HStack>
                    <Text size={"lg"} variant={"cblackwhite"} fontWeight={400}>
                        <Link href={"https://www.edvora.com/help"}>
                            <Text color={"blue.e100"} as={"span"}>
                                Check our FAQs section for more details
                            </Text>
                        </Link>{" "}
                        or{" "}
                        <Link href={"https://www.edvora.com/contact"}>
                            <Text color={"blue.e100"} as={"span"}>
                                drop us a line.
                            </Text>
                        </Link>
                    </Text>
                </Stack>
            </Stack>
        </VStack>
    );
};

export default AppCrashComponent;
