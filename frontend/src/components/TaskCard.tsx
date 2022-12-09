import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { EachCardType } from '../utils/types/types'
import AppCard from './ChakraOverrides/AppCard'
import AppAvatar from './CustomElements/AppAvatar'
import AppIcon from './CustomElements/AppIcon'
import AppMenu from './AppMenu'
import { BiDotsHorizontalRounded } from 'react-icons/bi';


function TaskCard({ name, handleDragStart, singleBoardContents }: { name: string, handleDragStart: any, singleBoardContents: EachCardType }) {
    const [cardHovered, setCardHovered] = React.useState(false)

    const handleMouseEnter = () => setCardHovered(true)
    const handleMouseLeave = () => setCardHovered(false)

    return (
        <AppCard
            variant="taskCard"
            draggable
            onDragStart={() => {
                setCardHovered(false)
                handleDragStart(singleBoardContents)
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Flex justifyContent="space-between">
                <Text>Work life balance</Text>
                {cardHovered && (
                    <AppMenu menuItems={[{ text: "Edit task" }, { text: "Delete task", color: "red" }]}>
                        <AppIcon iconName={BiDotsHorizontalRounded} />
                    </AppMenu>
                  )}
            </Flex>

            <Flex alignItems="center" gap="0.45em">
                <AppAvatar name={name} />
                <Text fontSize="xs" color="gray.500">19, Jan 2021</Text>
            </Flex>

        </AppCard>
    )
}

export default TaskCard