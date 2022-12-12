import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import AppIcon from './CustomElements/AppIcon'
import { BiCaretDown } from "react-icons/bi";


function Cc({ children, title }: {children?: any , title: string}) {
    const [isVisible, setIsVisible] = React.useState(false);


    return (
        <Box px="0.25em" mt="1.25em" _hover={{}}>
            <HStack px="0.25em" gap="0em" onClick={() => setIsVisible(prev => !prev)} width="fit-content" cursor="pointer">
                <AppIcon iconName={BiCaretDown} customStyles={{ color: "gray", fontSize: "20px", transform: isVisible ? "" : "rotate(-90deg)", transition: "transform 150ms ease-in" }} />
                <Text m="0" fontWeight="semibold" fontSize="14px">{title}</Text>
            </HStack>

            {isVisible && <Box border="1px solid green">
                {children}
            </Box>}
        </Box>
    )
}

export default Cc