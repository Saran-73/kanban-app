import React, { useMemo } from 'react'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import { BsFillPlusCircleFill } from "react-icons/bs"
import {BiBell, BiCheckCircle, BiHome } from "react-icons/bi"
import { Link } from 'react-router-dom';
import AppIcon from '../CustomElements/AppIcon';
import { APP_DASHBOARD, APP_TASKS_PAGE } from '../../navigation/routes';
import CustomAccordion from '../CustomAccordion'
import { appColors } from '../../theme/foundations/appColor';


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
      link: APP_TASKS_PAGE,
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
      name: "Projects",
      child: "---",
      link: APP_DASHBOARD
    },
    {
      name: "Team",
      child: "----",
      link: APP_TASKS_PAGE
    },
    {
      name: "Insights",
      child: "----",
      link: APP_TASKS_PAGE
    }
  ], []);

  return (
    <Box as="aside" width="20vw" maxW="225px" bg={appColors.brandDarkGray["300"]}>

      <Box px="1em" my="1em">
        <Button bg="inherit" border={`1px solid ${appColors.brandDarkGray["100"]}`} borderRadius="2em" fontSize="14px" gap="0.5em" _hover={{bg:"none"}}>
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
        {sideBarContents.map(each => <CustomAccordion title={each.name} />)}
      </Box>
    </Box>
  )
}

export default AppSidebar