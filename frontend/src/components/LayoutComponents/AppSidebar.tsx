import React, { useMemo } from 'react'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { BsFillPlusCircleFill } from "react-icons/bs"
import {BiBell, BiCheckCircle, BiHome } from "react-icons/bi"
import { Link } from 'react-router-dom';
import AppIcon from '../CustomElements/AppIcon';
import { APP_DASHBOARD, APP_BOARD_PAGE } from '../../navigation/routes';


//@ts-ignore
function AppSidebar() {

  const sideBarList = useMemo(() => [
    {
      name: "Home",
      link: APP_DASHBOARD,
      icon: BiHome,
    },
    {
      name: "My Tasks",
      link: APP_BOARD_PAGE,
      icon: BiCheckCircle,
    },
    {
      name: "Inbox",
      link: "",
      icon: BiBell,
    },
  ], [])

  const sideBarContents = useMemo(() => [
    {
      head: "Projects",
      child: "---",
      link: APP_DASHBOARD
    },
    {
      head: "Team",
      child: "----",
      link: APP_BOARD_PAGE
    },
    {
      head: "Insights",
      child: "----",
      link: APP_BOARD_PAGE
    }
  ], []);

  return (
    <Box as="aside" width="20vw" maxW="225px" bg="brandDarkGray.400">

      <Box px="1em" my="1em">
      <Button bg="inherit" border="1px solid #363639" borderRadius="2em" fontSize="14px" gap="0.5em" _hover={{bg:"none"}}>
      <AppIcon iconName={BsFillPlusCircleFill} customStyles={{ color: "brandRed.50", fontSize: "1.35em", bg: "white", borderRadius: "50%" }} />
      <Text>Create</Text>
      </Button>

      <Flex direction="column" mb="1em" pt="0.5em">
          {sideBarList.map(each =>
            <Link to={each.link}>
              <HStack pl="1em" py="0.35em" borderRadius="0.5em" fontSize="14px" _hover={{ bg: "brandDarkGray.50" }} bg="inherit">
                <AppIcon iconName={each.icon} customStyles={{ color: 'brandDarkGray.200' , height:"20px" , width:"20px" }} />
              <Text fontWeight="medium">{each.name}</Text>
              </HStack>
            </Link>
          )}
      </Flex>
      </Box>

      <Box>


      </Box>
    </Box>
  )
}

export default AppSidebar