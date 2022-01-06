import { Flex, Icon, useColorModeValue } from "@chakra-ui/react"
import { ChevronLeftIcon } from '@chakra-ui/Icons'

const Header = (props) => {
    console.log(props)
    const arrowColor = useColorModeValue("primary.light.200", "primary.dark.200")
    const bg = useColorModeValue("primary.light._000", "primary.dark._000")
    return (
        <Flex
            transition="0.5s opacity"
            as="nav"
            h="63px"
            p="0 15px"
            bg={bg}
            width="full"
            align="center"
            {...props}
        >
            
            <ChevronLeftIcon w="24px" h="24px" color={arrowColor} onClick={props.goback} focusable={true} borderRadius="50%"/>
            {props.children}
        </Flex>
    )
}

export default Header;