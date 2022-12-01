import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import BoardPageSection from '../components/BoardPageSection';
import AppNavbar from '../components/LayoutComponents/AppNavbar';

function BoardPage() {  
  return (
    <AppNavbar>
      <Flex justifyContent="space-evenly" mt="2em" mb="1em">
        <BoardPageSection heading="TO DO"/>
        <BoardPageSection heading="IN PROGRESS"/>
        <BoardPageSection heading="REVIEW" />
        <BoardPageSection heading="DONE"/>
      </Flex>
    </AppNavbar>
  )
}

export default BoardPage;