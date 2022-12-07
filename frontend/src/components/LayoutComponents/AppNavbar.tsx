import {
    Box,
    Flex,
    Input,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APP_LOGIN_PAGE } from '../../navigation/routes'
import { getApiToken, removeApiTokenls } from '../../utils/utlis'
import AppIcon from '../CustomElements/AppIcon'
import { BiCaretDown, BiCog, BiSearch } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import AppAvatar from '../CustomElements/AppAvatar'
import AppMenu from '../AppMenu'

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
            <Flex justifyContent="space-between" alignItems="center" padding="1em 2.5em" bg="blue.700">
                <Flex gap="1em" color="whiteAlpha.900">
                    <Text>KANBAN logo</Text>
                </Flex>
                <Flex gap="1em" mr="1em" alignItems="center">
                    <Box position="relative">
                        <Input variant="searchInput" type="text" size="sm" placeholder="search" />
                        <AppIcon iconName={BiSearch} customStyles={{ color: "blue.700", position: "absolute", top: "9px", left: "8px" }} />
                    </Box>
                    <AppIcon iconName={BsFillPlusCircleFill} customStyles={{ color: "orange", fontSize: "2xl", bg: "white", borderRadius: "50%" }} />
                    <AppIcon iconName={BiCog} customStyles={{ color: "whiteAlpha.800", fontSize: "2xl" }} />
                    <AppMenu menuItems={[{ text: "Log out", onClickHandle: handleLogout }]}>
                        <Box position="relative">
                            <AppAvatar name={"naruto"} />
                            <AppIcon iconName={BiCaretDown} customStyles={{ color: "white", position: "absolute", top: "8px", right: "-8px" }} />
                        </Box>
                    </AppMenu>
                </Flex>
            </Flex>
            {/* } */}
            {children}
        </Box>
    )
}

export default AppNavbar