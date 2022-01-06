import { useColorModeValue, Box } from '@chakra-ui/react'
import { mode, whiten, darken } from '@chakra-ui/theme-tools'
export const Card = (props) => {
    const card_bg = useColorModeValue('backgrounds.light.e100', 'backgrounds.dark.e100')
    const hover_bg = useColorModeValue(darken('backgrounds.light.e100', 3), whiten('backgrounds.dark.e100', 15))
    return (
        <Box key={props.key} p="12px" borderRadius={2} w="396px" h="124px" shadow="sm" bg={card_bg} transition="0.5s ease-in-out" overflow="hidden" _hover={{bg: hover_bg}} {...props} >
            {props.children}
        </Box>
    )
}