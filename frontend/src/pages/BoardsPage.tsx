import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import AppTabs from '../components/AppTabs';
import AppIcon from '../components/CustomElements/AppIcon';
import AppLayout from '../components/LayoutComponents/AppLayout';

function BoardPage() {


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
          <AppTabs />
          
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
    </AppLayout>
  )
}

export default BoardPage;