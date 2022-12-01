import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import AppNavbar from '../components/LayoutComponents/AppNavbar';
import TaskCard from '../components/TaskCard';

function BoardPage() {

  return (
    <AppNavbar>
      <Flex>
        <Box h="95vh" w="30vw">
          <TaskCard />
          <TaskCard />
          <TaskCard />

        </Box>
        <Box h="95vh" w="30vw"></Box>
        <Box h="95vh" w="30vw"></Box>
      </Flex>
    </AppNavbar>
  )
}

export default BoardPage;