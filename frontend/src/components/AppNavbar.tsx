import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APP_DASHBOARD, APP_LISTING_PAGE, APP_LOGIN_PAGE } from '../navigation/routes'
import { getApiToken, removeApiTokenls } from '../utils/utlis'

//@ts-ignorets-ignore
function AppNavbar({ children }) {
    const isTokenPresent = getApiToken()
    const navigate = useNavigate();

    const handleLogout = () => {
        if (isTokenPresent) {
            removeApiTokenls()
            window.location.assign(APP_LOGIN_PAGE)
            // navigate(APP_LOGIN_PAGE)
        }
    }

    return (
        <Box >
            {/* {isTokenPresent && */}
            <Flex justifyContent="space-between" padding="1em 2.5em" bg="blue.700">
                <Flex gap="1em" color="whiteAlpha.900">
                    <Link to={APP_DASHBOARD}><Text variant="navText" >Dashboard</Text></Link>
                    <Link to={APP_LISTING_PAGE}> <Text variant="navText" >Listing</Text></Link>
                </Flex>
                <Box>
                    <Button onClick={handleLogout}>Log out</Button>
                </Box>
            </Flex>
            {/* } */}
            {children}
        </Box>
    )
}

export default AppNavbar