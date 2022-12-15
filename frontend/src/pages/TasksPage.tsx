import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import AppTabs from '../components/AppTabs';
import Board from '../components/Board';
import AppIcon from '../components/CustomElements/AppIcon';
import AppLayout from '../components/LayoutComponents/AppLayout';

function TasksPage() {

  const tabData = React.useMemo(() => [
    {
      name: "first",
      component: () => <Board />,
    },
    {
      name: "second",
      component: () => <Board />,
    },
  ], []);



  return (
   <AppLayout>
      <Flex>
        <HStack>

        </HStack>
        <Box>
          <Flex>
            <Text>
              My Tasks
            </Text>
            {/* <AppIcon iconName={} /> */}
          </Flex>


        </Box>
        <HStack>
          <Button>
            {/* <AppIcon iconName={} /> */}
            <Text>Share</Text>
          </Button>
          <Button>
            {/* <AppIcon iconName={} /> */}
            <Text>Customize</Text>
          </Button>
        </HStack>
      </Flex>
      
      <AppTabs tabData={tabData} />
    </AppLayout>
  )
}

export default TasksPage;