import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import TaskCard from './TaskCard'
import { BiPlus } from 'react-icons/bi';
import AppIcon from './CustomElements/AppIcon';

function BoardPageSection({ heading }: { heading: string }) {
    return (
        <Box h="95vh" w="20vw" px="0.5em">
            <Flex alignItems="center" justifyContent="space-between" mb="1em" px="4px">
                <Text as="h2" fontSize="sm" fontWeight="bold" >{heading}</Text>
                <AppIcon iconName={BiPlus} />
            </Flex>
            <TaskCard />
            <TaskCard />
        </Box>
    )
}

export default BoardPageSection