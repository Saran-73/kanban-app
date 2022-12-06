import { Box, Flex, Text } from '@chakra-ui/react'
import React,{memo} from 'react'
import TaskCard from './TaskCard'
import { BiPlus } from 'react-icons/bi';
import AppIcon from './CustomElements/AppIcon';

export interface EachBoardType{
    id: string,
    name: string
}

interface BoardSectionType{
    sectionId: string,
    heading: string,
    contents: EachBoardType[],
    handleDragEnter: () => void,
    handleDrop: any,
    handleDragOver: any,
    handleDragStart: any,
}

function BoardsSection({ sectionId, heading, contents, handleDragEnter, handleDrop, handleDragOver, handleDragStart }: BoardSectionType ) {
    console.log("IS rendering")
    return (
        <Box
            h="95vh"
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
                <AppIcon iconName={BiPlus} />
            </Flex>
            {contents.map(eachBoard => <TaskCard name={eachBoard.name} handleDragStart={handleDragStart} singleBoardContents={eachBoard} />)}
        </Box>
    )
}

// export default BoardsSection
export default memo(BoardsSection)
