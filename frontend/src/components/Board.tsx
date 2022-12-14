import { Flex } from '@chakra-ui/react'
import React, {useState} from 'react'
import BoardsSection from '../components/BoardSection';
import { EachCardType } from '../utils/types/types';


function Board() {

    const [boardData, setBoardData] = useState([
        {
          id: "board one",
          heading: "TO DO",
          contents: [
            { id: "b1-1", name: "thor" },
            {
              id: "b1-2", name: "hawkye"
            }
          ]
        },
        {
          id: "board two",
          heading: "IN PROGRESS",
          contents: [
            { id: "b2-1", name: "krish" },
            {
              id: "b2-2", name: "shakthiman"
            }
          ]
    
        },
        {
          id: "board three",
          heading: "REVIEW",
          contents: [
            { id: "b3-1", name: "hulk" },
          ]
        },
        {
          id: "board four",
          heading: "DONE",
          contents: []
        },
      ])
    
      const [choosenBoard, setChoosenBoard] = useState<EachCardType>({id: "", name: ""})

  const handleDragStart = (singleBoardContents: EachCardType) => {
    setChoosenBoard(singleBoardContents)
  }

  const handleDragEnd = () => {

  }

  const handleDragOver = (event: { preventDefault: () => void }) => {
    // prevent the default behaviour of the drop target to allow drop
    event.preventDefault();
  }

  const handleDragEnter = () => {

  }

  const handleDragLeave = () => {

  }

  const handleDrop = (event: { target: any; preventDefault: () => void; }) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("data-section-Id")

    setBoardData( (prevBoardData : any) => {
      return prevBoardData.map((eachBoardsSection: { contents: EachCardType[]; }) => {
        // remove selected board form the previous section
           const removeSelectedBoard = targetId ? eachBoardsSection.contents.filter(eachBoard => choosenBoard.id !== eachBoard.id) : null
        
              return {
                ...eachBoardsSection,
                contents: removeSelectedBoard || eachBoardsSection.contents
              }
        
          }).map((eachBoardsSection: { id: string; contents: EachCardType[]; } ) => {
        // add selected board to the particular section
            if (targetId === eachBoardsSection.id) {
              return {
                ...eachBoardsSection,
                contents: [...eachBoardsSection.contents, {...choosenBoard}]
              }
            } else {
              return eachBoardsSection
            }
    
          })
    })
  }

  return (
    <Flex justifyContent="space-evenly" mt="2em" mb="1em" h="90%">
    {boardData.map(eachBoardSection => {
      return <BoardsSection
        sectionId={eachBoardSection.id}
        heading={eachBoardSection.heading}
        contents={eachBoardSection.contents}
        handleDragEnter={handleDragEnter}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleDragStart={handleDragStart}
      />
    })}
  </Flex>
  )
}

export default Board