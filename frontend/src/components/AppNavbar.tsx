import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

//@ts-ignorets-ignore
function AppNavbar({ children }) {
    return (
        <Box >
            <Flex justifyContent="space-between" padding="1em" bg="blue.700">
                <Flex gap="1em" color="whiteAlpha.900">
                    <Text>Dashboard</Text>
                    <Text>Listing</Text>
                </Flex>
                <Box>
                    <Button >Logout</Button>
                </Box>
            </Flex>
            {children}
        </Box>
    )
}

export default AppNavbar