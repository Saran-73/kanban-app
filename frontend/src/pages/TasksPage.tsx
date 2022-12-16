import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import AppTabs from '../components/AppTabs';
import Board from '../components/Board';
import AppAvatar from '../components/CustomElements/AppAvatar';
import AppIcon from '../components/CustomElements/AppIcon';
import AppLayout from '../components/LayoutComponents/AppLayout';
import Onprogress from '../components/Onprogress';

function TasksPage() {

  const tabData = React.useMemo(() => [
    {
      name: "List",
      component: () => <Onprogress />,
    },
    {
      name: "Board",
      component: () => <Board />,
    },
    {
      name: "Calender",
      component: () => <Onprogress />,
    },
    {
      name: "Files",
      component: () => <Onprogress />,
    },
  ], []);


  return (
    <AppLayout>
      <Flex gap="0.75em" px="1.5em" py="0.75em">
        <HStack flex="0 1 50px" minW="25px">
          <AppAvatar name="B" size="md" customStyles={{ bg: "blue.600" }} />
        </HStack>
        <Box flex="0 2 75%">
          <HStack>
            <Text fontSize="20px" fontWeight="600">
              My Tasks
            </Text>
            <AppIcon
              iconName={BiChevronDown}
              toolTipLabel="Actions"
              customStyles={{ fontSize: "1.5em", color: "brandDarkGray.200" }} />
          </HStack>
        </Box>
        <HStack flex="0 2 5%" ml="2.25em">
          <Button variant="secondaryButton">
            {/* <AppIcon iconName={} /> */}
            <Text>Share</Text>
          </Button>
          <Button variant="secondaryButton">
            {/* <AppIcon iconName={} /> */}
            <Text>Customize</Text>
          </Button>
        </HStack>
      </Flex>

      <Box pos="relative" bottom="1.5em">
        <AppTabs tabData={tabData} />
      </Box>
    </AppLayout>
  )
}

export default TasksPage;