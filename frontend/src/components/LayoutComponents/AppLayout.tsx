import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import AppNavbar from './AppNavbar'
import AppSidebar from './AppSidebar'

function AppLayout({ children }: any) {
    const [toggleSidebar, setToggleSidebar] = useState(true)

    const handleSidebarToggle = () => {
        setToggleSidebar((prev: boolean) => !prev)
    }

    return (
        <Box w="100vw">
            <AppNavbar onHamburgerToggle={handleSidebarToggle} />
            <Flex h="100%" style={{ marginLeft: toggleSidebar ? "0px" : "-225px", transition: "margin-left 220ms linear" }}>
                <Flex minH="100vh">
                    <AppSidebar />
                </Flex>
                <Box flexGrow="1">
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}

export default AppLayout;
