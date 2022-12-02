import { Box, Flex, Stack, Text, VStack, } from '@chakra-ui/react'
import React from 'react'
import AppAccordion from '../components/AppAccordion'
import AppNavbar from '../components/LayoutComponents/AppNavbar'
import AppSidebar from '../components/LayoutComponents/AppSidebar'

function DashboardPage() {
  return (
    <AppNavbar>
      <AppSidebar>
        <VStack h="100%">
          <Stack gap="2.5em" pt="5em" w="75%" h="100%">
            <AppAccordion title="Tasks due soon" endText="See all my tasks" />
            <AppAccordion title="Favorites" />
            <AppAccordion title="Recent Projects"  />
          </Stack>
        </VStack>
      </AppSidebar>
    </AppNavbar>
  )
}

export default DashboardPage