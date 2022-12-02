import {
    Avatar, Box,
    Flex,
    Input,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APP_LOGIN_PAGE } from '../../navigation/routes'
import { getApiToken, removeApiTokenls } from '../../utils/utlis'
import AppIcon from '../CustomElements/AppIcon'
import { BiCaretDown, BiCog, BiSearch } from "react-icons/bi";

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
                        <Input type="text" size="sm" placeholder="search" pl="24px" color="whiteAlpha.900" />
                        <AppIcon iconName={BiSearch} customStyles={{ color: "whiteAlpha.700", position: "absolute", top: "9px", left: "5px" }} />
                    </Box>
                    <AppIcon iconName={BiCog} customStyles={{ color: "whiteAlpha.800", fontSize: "2xl", cursor: "pointer" }} />
                    <Menu>
                        <MenuButton position="relative">
                            <Avatar size="sm" name="naruto" src="" cursor="pointer" />
                            <AppIcon iconName={BiCaretDown} customStyles={{ color: "white", position: "absolute", top: "8px", right: "-8px" }} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={handleLogout}>Log out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
            {/* } */}
            {children}
        </Box>
    )
}

export default AppNavbar