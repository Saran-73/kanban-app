import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { getApiToken, removeApiTokenls } from '../utils/utlis'

//@ts-ignorets-ignore
function AppNavbar({ children }) {
    const isTokenPresent = getApiToken()

    const handleLogout = () => {
        if (isTokenPresent) {
            removeApiTokenls()
            window.location.assign("/")
        }
    }
    return (
        <Box >
            {isTokenPresent &&
                <Flex justifyContent="space-between" padding="1em" bg="blue.700">
                    <Flex gap="1em" color="whiteAlpha.900">
                        <Text>Dashboard</Text>
                        <Text>Listing</Text>
                    </Flex>
                    <Box>
                        <Button onClick={handleLogout}>Log out</Button>
                    </Box>
                </Flex>}
            {children}
        </Box>
    )
}

export default AppNavbar