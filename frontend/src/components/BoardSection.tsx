import { Box, Flex, Input, Text } from '@chakra-ui/react'
import React, { memo, useState, useRef } from 'react'
import TaskCard from './TaskCard'
import { BiPlus } from 'react-icons/bi';
import AppIcon from './CustomElements/AppIcon';
import { EachCardType } from '../utils/types/types';
import AppCard from './ChakraOverrides/AppCard';

interface BoardSectionType {
    sectionId?: string,
    heading: string,
    contents?: EachCardType[],
    handleDragEnter?: () => void,
    handleDrop?: any,
    handleDragOver?: any,
    handleDragStart?: any,
    handleCreateTask?: (formBody: { title: string; }) => void,
}

function BoardsSection({ sectionId, heading, contents, handleDragEnter, handleDrop, handleDragOver, handleDragStart, handleCreateTask }: BoardSectionType) {

    const [task, setTask] = useState({ title: "new title" });
    const [createNew, setCreateNew] = useState(false);
    const inputRef = useRef<null | HTMLInputElement>(null);

    const handleCreateNewTask = () => {
        setCreateNew(!createNew)
    }

    const handleKeyPress = (e: { key: any; }) => {
        if (e.key === "Enter" && task.title !== "") {
            // handleCreateTask(task)
            setCreateNew(false)
            setTask({ title: '' })
        }
    }

    return (
        <Box
            w="20vw"
            p="1em 2em"
            borderRadius="0.45em"
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            data-section-Id={sectionId}
            bgColor={'rgba(40, 40, 43, 0.8)'}
        >
            <Flex alignItems="center" justifyContent="space-between" mb="1em" px="4px">
                <Text as="h2" fontSize="sm" fontWeight="bold" textTransform="uppercase" >
                    {heading}
                </Text>
                <Flex gap="1em" alignItems="center" onClick={handleCreateNewTask}>
                    <AppIcon iconName={BiPlus} />
                </Flex>
            </Flex>
            {contents?.map(eachBoard =>
                <TaskCard
                    title={eachBoard.title}
                    handleDragStart={handleDragStart}
                    singleBoardContents={eachBoard} />
            )}
            {createNew &&
                <AppCard variant="taskCard">
                    <Input
                        ref={inputRef}
                        type="text"
                        name="taskTitle"
                        size="sm"
                        onChange={(e) => setTask({ title: e.target.value })}
                        onKeyDown={handleKeyPress}
                    />
                </AppCard>
            }
        </Box>
    )
}

// export default BoardsSection
export default memo(BoardsSection)
