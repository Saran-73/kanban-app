import React from 'react'
import { Box, Flex, Input, Text, } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCaretDown, BiCog, BiSearch } from "react-icons/bi"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { FaBars } from "react-icons/fa"
import { APP_LOGIN_PAGE } from '../../navigation/routes'
import { getApiToken, removeApiTokenls } from '../../utils/utlis'
import AppIcon from '../CustomElements/AppIcon'
import AppAvatar from '../CustomElements/AppAvatar'
import AppMenu from '../AppMenu'
import AppFlex from '../ChakraOverrides/AppFlex'

//@ts-ignorets-ignore
function AppNavbar() {
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
            <AppFlex as="nav" justifyContent="space-between" p="0.6em 1.5em" bg="blue.700">
              <AppFlex  color="whiteAlpha.900" >
                <AppIcon iconName={FaBars} />
                    <Text>KANBAN APP</Text>
                </AppFlex>
                <Box position="relative">
                        <Input variant="searchInput" type="text" size="sm" placeholder="Search" w="30vw" />
                        <AppIcon iconName={BiSearch} customStyles={{ color: "blue.700", pos: "absolute", top: "9px", left: "8px" }} />
                </Box>
                <AppFlex mr="1em">
                    <AppIcon iconName={BsFillPlusCircleFill} customStyles={{ color: "orange", fontSize: "2xl", bg: "white", borderRadius: "50%" }} />
                    <AppMenu menuItems={[{ text: "Log out", onClickHandle: handleLogout }]}>
                        <Box position="relative">
                            <AppAvatar name={"naruto"} />
                            <AppIcon iconName={BiCaretDown} customStyles={{ color: "white", pos: "absolute", top: "8px", right: "-8px" }} />
                        </Box>
                    </AppMenu>
                </AppFlex>
            </AppFlex>
    )
}

export default AppNavbar

// <AppIcon iconName={BiCog} customStyles={{ color: "whiteAlpha.800", fontSize: "2xl" }} /> 
