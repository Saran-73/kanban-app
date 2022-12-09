import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import AppNavbar from './AppNavbar'
import AppSidebar from './AppSidebar'
import { AnimatePresence, motion, useCycle } from "framer-motion"

function AppLayout({ children }: any) {
    const [open , cycleOpen] = useCycle(false, true);
    return (
        <Box w="100vw" h="100vh">
            <AppNavbar onHamburgerToggle={cycleOpen} />
            <Flex h="100%">
                <AnimatePresence>
                {open && (
                        <motion.aside
                            initial={{ transform: "translateX(-225px)" }}
                            animate={{ transform: "translateX(0px)" }}
                            transition={{ duration: 0.75  }}
                            exit={{
                                transform: "translateX(-225px)",
                                transition: {  duration: 0.75 }
                              }}
                    >
                        <Flex h="100%">
                            <AppSidebar />
                        </Flex>
                    </motion.aside>
                    )}
                    </AnimatePresence>
                <Box flexGrow="1">
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}

export default AppLayout;