import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { EachBoardType } from './BoardSection'
import AppCard from './ChakraOverrides/AppCard'

function TaskCard({ name, handleDragStart, singleBoardContents }: { name: string, handleDragStart: any , singleBoardContents: EachBoardType}) {
    return (
        <AppCard
            variant="taskCard"
            draggable
            onDragStart={() => {
                handleDragStart(singleBoardContents)
                // se(true)
            }}
            // cursor={s ? "grabbing" : "grab"}
        >
            <Text>{name}</Text>
            <Divider />
            <Box>
            
            </Box>
        </AppCard>
    )
}

export default TaskCard