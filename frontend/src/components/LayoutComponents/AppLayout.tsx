import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import AppNavbar from './AppNavbar'
import AppSidebar from './AppSidebar'

function AppLayout({ children }: any) {
    return (
        <Box w="100vw" h="100vh">
            <AppNavbar />
            <Flex h="100%">
                <AppSidebar />
                <Box>
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}

export default AppLayout;