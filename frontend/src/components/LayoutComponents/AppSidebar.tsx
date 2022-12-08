import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { APP_DASHBOARD, APP_BOARD_PAGE } from '../../navigation/routes';
import { Link } from 'react-router-dom';

//@ts-ignore
function AppSidebar() {
  const sideBarContents = [
    {
      head: "Favourites",
      child: "---",
      link: APP_DASHBOARD
    },
    {
      head: "Saved searches",
      child: "----",
      link: APP_BOARD_PAGE
    },
    {
      head: "Teams",
      child: "----",
      link: APP_BOARD_PAGE
    }
  ];
  const sideBarList = [
    {
      icon: "",
      name: "Home",
      link: APP_DASHBOARD,
    },
    {
      icon: "",
      name: "Board",
      link: APP_BOARD_PAGE,
    },
    {
      icon: "",
      name: "Portfolio",
      link: "",
    },
    {
      icon: "",
      name: "Settings",
      link: "",
    },
  ]
  return (
      <Box h="90.75vh" width="225px" bg="whiteAlpha.600">
        <Flex direction="column" p="1em" gap="0.45em">
        {sideBarList.map(each => <Link to={each.link}><Text _hover={{color:"blue.600"}}>{each.name}</Text></Link>)}
        </Flex>
        <Accordion allowMultiple allowToggle>
          {sideBarContents.map(each => <AccordionItem>
            <p>
              <AccordionButton _expanded={{bg:"blackAlpha.100"}}>
                <Text flex='1' textAlign='left' color="blue.900" fontSize="1.15em">
                  {each.head}
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </p>
            <AccordionPanel pb={4} bg="whiteAlpha.600" paddingLeft="1.75em">
              {each.child}
            </AccordionPanel>
          </AccordionItem>)}
        </Accordion>
      </Box>
  )
}

export default AppSidebar