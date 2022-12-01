import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { APP_DASHBOARD, APP_LISTING_PAGE } from '../../navigation/routes';

//@ts-ignore
function AppSidebar({ children }) {
  const sideBarContents = [
    {
      head: "Favourites",
      child: "--Will be an array--",
      link: APP_DASHBOARD
    },
    {
      head: "Saved searches",
      child: "----",
      link: APP_LISTING_PAGE
    },
    {
      head: "Teams",
      child: "----",
      link: APP_LISTING_PAGE
    }
  ];
  return (
    <Flex w="100vw">
      <Box h="90.75vh" width="225px" bg="whiteAlpha.600">
        
        <Accordion allowMultiple allowToggle>
          {sideBarContents.map(each => <AccordionItem>
            <p>
              <AccordionButton _expanded={{bg:"blackAlpha.100"}}>
                <Box flex='1' textAlign='left' color="blue.900" fontSize="1.15em">
                  {each.head}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </p>
            <AccordionPanel pb={4} bg="whiteAlpha.600" paddingLeft="1.75em">
              {each.child}
            </AccordionPanel>
          </AccordionItem>)}
        </Accordion>
      </Box>
      <Box flex="1">
        {children}
      </Box>
    </Flex>

  )
}

export default AppSidebar