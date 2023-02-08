import { Box, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React, { memo, useState, useRef } from 'react'
import TaskCard from './TaskCard'
import { BiPlus } from 'react-icons/bi';
import AppIcon from './CustomElements/AppIcon';
import { EachCardType } from '../utils/types/types';
import AppCard from './ChakraOverrides/AppCard';

interface BoardSectionType {
    heading: string,
    contents?: EachCardType[],
    handleDragEnter?: () => void,
    handleDrop?: any,
    handleDragOver?: any,
    handleDragStart?: any,
    setNewTask?: any,
    newTask?: any,
    createTaskMutation?: any,
    id?: string,
}

function BoardsSection({ heading, contents, id, createTaskMutation, handleDragEnter, handleDrop, handleDragOver, handleDragStart }: BoardSectionType) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [createNew, setCreateNew] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const setFocusToInput = () => {
        inputRef.current?.focus();
    }

    const handleKeyPress = (e: { key: any; }) => {
        if (e.key === "Enter" && title === "") {
            setFocusToInput()
        }

        if (e.key === "Enter" && title !== "") {
            // //@ts-ignore
            createTaskMutation({ title: title, sectionId: id, description: description })
            setCreateNew(false)
            setTitle('')
            setDescription('')
        }
    }
    const handleCreateNew = () => {
        setCreateNew(!createNew)
        // setFocusToInput()
    }


    return (
        <Box
            w="20vw"
            p="1em 2em"
            borderRadius="0.45em"
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            bgColor={'rgba(40, 40, 43, 0.8)'}
        >
            <Flex alignItems="center" justifyContent="space-between" mb="1em" px="4px">
                <Text as="h2" fontSize="sm" fontWeight="bold" textTransform="uppercase" >
                    {heading}
                </Text>
                <Flex gap="1em" alignItems="center" onClick={handleCreateNew}>
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
                        name="title"
                        value={title}
                        size="sm"
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <Textarea
                        rows={2}
                        mt={4}
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                </AppCard>
            }
        </Box>
    )
}

// export default BoardsSection
export default memo(BoardsSection)
