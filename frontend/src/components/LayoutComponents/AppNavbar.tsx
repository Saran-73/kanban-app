import React from 'react'
import { Box, Flex, HStack, Input, Text, VStack, } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCaretDown, BiSearch } from "react-icons/bi"
import { FaBars } from "react-icons/fa"
import { APP_LOGIN_PAGE } from '../../navigation/routes'
import { getApiToken, removeApiTokenls } from '../../utils/utlis'
import AppIcon from '../CustomElements/AppIcon'
import AppAvatar from '../CustomElements/AppAvatar'
import AppMenu from '../AppMenu'

//@ts-ignorets-ignore
function AppNavbar({onHamburgerToggle}) {
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
            <HStack as="nav" justifyContent="space-between" p="0.6em 1.5em" bg="brandPrimary.300">
              <HStack  color="whiteAlpha.900" >
                <AppIcon iconName={FaBars} onClick={onHamburgerToggle} toolTipLabel="Menu" />
                    <Text>KANBAN APP</Text>
                </HStack>
                <Box position="relative">
                        <Input variant="searchInput" type="text" size="sm" placeholder="Search" w="30vw" />
                        <AppIcon iconName={BiSearch} customStyles={{color:"brandDarkGray.200", pos: "absolute", top: "9px", left: "8px" }} />
                </Box>
                <HStack mr="1em">
                    <AppMenu menuItems={[{ text: "Log out", onClickHandle: handleLogout }]}>
                        <Box position="relative">
                            <AppAvatar name={"naruto"} />
                            <AppIcon iconName={BiCaretDown} customStyles={{ color: "white", pos: "absolute", top: "8px", right: "-8px" }} />
                        </Box>
                    </AppMenu>
                </HStack>
            </HStack>
    )
}

export default AppNavbar

// <AppIcon iconName={BiCog} customStyles={{ color: "whiteAlpha.800", fontSize: "2xl" }} /> 
