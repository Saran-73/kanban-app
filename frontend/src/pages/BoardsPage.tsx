import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import BoardsSection, { EachBoardType } from '../components/BoardSection';
import AppNavbar from '../components/LayoutComponents/AppNavbar';
import AppSidebar from '../components/LayoutComponents/AppSidebar';

function BoardPage() {
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
  const [choosenBoard, setChoosenBoard] = useState({})

  const handleDragStart = (singleBoardContents: React.SetStateAction<{}>) => {
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

     // @ts-ignore
    setBoardData(prevBoardData => {
      return prevBoardData.map(eachBoardsSection => {

        // @ts-ignore
            const removeSelectedBoard = eachBoardsSection.contents.filter(eachBoard => choosenBoard.id !== eachBoard.id)

              return {
                ...eachBoardsSection,
                contents: removeSelectedBoard
              }
    
          }).map(eachBoardsSection => {
      // add selected board 
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
    <AppNavbar>
      <AppSidebar>
        {/* <button onClick={() => setNewState(pre => pre + 1)}>click</button> */}
        <Flex justifyContent="space-evenly" mt="2em" mb="1em">
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
      </AppSidebar>
    </AppNavbar>
  )
}

export default BoardPage;