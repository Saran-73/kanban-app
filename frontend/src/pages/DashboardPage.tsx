import { Box, Flex, Stack, Text, VStack, } from '@chakra-ui/react'
import React from 'react'
import AppLayout from '../components/LayoutComponents/AppLayout'
import Onprogress from '../components/Onprogress'

function DashboardPage() {
  return (
    <AppLayout>
        <VStack h="100%">
          <Stack gap="2.5em" pt="5em" w="75%" h="100%">
           <Onprogress />
          </Stack>
        </VStack>
   </AppLayout>
  )
}

export default DashboardPage