import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import React, { memo } from 'react'
import TaskCard from './TaskCard'
import { BiPlus } from 'react-icons/bi';
import AppIcon from './CustomElements/AppIcon';
import { EachBoardType } from '../utils/types/types';


interface BoardSectionType {
    sectionId: string,
    heading: string,
    contents: EachBoardType[],
    handleDragEnter: () => void,
    handleDrop: any,
    handleDragOver: any,
    handleDragStart: any,
}

function BoardsSection({ sectionId, heading, contents, handleDragEnter, handleDrop, handleDragOver, handleDragStart }: BoardSectionType) {
    console.log("IS rendering")
    return (
        <Box
            w="20vw"
            p="0.5em"
            borderRadius="0.45em"
            backgroundColor="#ECEDED"
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            data-section-Id={sectionId}
        >
            <Flex alignItems="center" justifyContent="space-between" mb="1em" px="4px">
                <Text as="h2" fontSize="sm" fontWeight="bold" >{heading}</Text>
                <Flex gap="1em" alignItems="center">
                    {/* --- TOOLTIP NOT WORKING AS THE REF NOT GETTING EXPOSED FROM THE ICON ----- */}
                    <Tooltip hasArrow label='Add Task' bg='gray.300' color='black'>
                        <AppIcon iconName={BiPlus} />
                    </Tooltip>
                </Flex>
            </Flex>
            {contents.map(eachBoard => <TaskCard name={eachBoard.name} handleDragStart={handleDragStart} singleBoardContents={eachBoard} />)}
        </Box>
    )
}

// export default BoardsSection
export default memo(BoardsSection)
