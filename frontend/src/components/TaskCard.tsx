import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import AppCard from './ChakraOverrides/AppCard'

function TaskCard() {
    return (
        <AppCard variant="taskCard">
            <Text>Heading</Text>
            <Box>
                <Text>do cooking</Text>
            </Box>
        </AppCard>
    )
}

export default TaskCard