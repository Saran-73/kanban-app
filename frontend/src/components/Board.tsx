import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query';
import { GET_TASKS_API, MAKE_UPDATE_TASKS_API } from '../api/url';
import { makeGetRequest, makePutRequest } from '../api/utlis';
import BoardsSection from '../components/BoardSection';
import useHandleToast from '../hooks/useHandleToast';
import { appColors } from '../theme/foundations/appColor';
import { EachCardType } from '../utils/types/types';


function Board() {

  const [boardData, setBoardData] = useState([])

  const [choosenBoard, setChoosenBoard] = useState<EachCardType>({ id: "", title: "", description: "" });
  // const { handleToast } = useHandleToast();

  // const { data } = useQuery(GET_TASKS_API("63a1b132565f2dc09957c1f6"), () => makeGetRequest(GET_TASKS_API("63a1b132565f2dc09957c1f6")));

  // React.useEffect(() => {
  //   setBoardData(data)
  // }, [])

  // const { mutate: editMutation } = useMutation((formBody) => makePutRequest(MAKE_UPDATE_TASKS_API("63a1b132565f2dc09957c1f6"), formBody), {
  //   onSuccess: (data: any) => {
  //     console.log(data)
  //     setBoardData(data.all_sections)
  //     handleToast("success", "success")
  //   },
  //   onError: (err: any) => {
  //     handleToast("Something went wrong", "error")
  //     console.log(err)
  //   }
  // })

  // console.log(boardData)



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

    setBoardData((prevBoardData: any) => {
      return prevBoardData.map((eachBoardsSection: { all_tasks: EachCardType[]; }) => {
        // remove selected board form the previous section
        const removeSelectedBoard = targetId ? eachBoardsSection.all_tasks.filter(eachBoard => choosenBoard.id !== eachBoard.id) : null

        return {
          ...eachBoardsSection,
          all_tasks: removeSelectedBoard || eachBoardsSection.all_tasks
        }
      }).map((eachBoardsSection: { id: string; all_tasks: EachCardType[]; }) => {
        // add selected board to the particular section 
        if (targetId === eachBoardsSection.id) {
          return {
            ...eachBoardsSection,
            all_tasks: [...eachBoardsSection.all_tasks, { ...choosenBoard }]
          }
        } else {
          return eachBoardsSection
        }
      })
    })

    // const formBody = {
    //   all_sections: [
    //     {
    //       section_name: 'try now',
    //       all_tasks: [{
    //         title: "new task",
    //         description: "cretaed first task"
    //       }]
    //     }
    //   ]
    // }

    // //@ts-ignore
    // editMutation(formBody)
  }

  return (
    <Flex justifyContent="space-evenly" py="1em" h="90vh" bgColor={appColors.brandDarkGray["400"]}>
      {boardData?.map(eachBoardSection => {
        return <BoardsSection
          // @ts-ignore
          sectionId={eachBoardSection.id}
          // @ts-ignore
          heading={eachBoardSection.section_name}
          // @ts-ignore
          contents={eachBoardSection.all_tasks}
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