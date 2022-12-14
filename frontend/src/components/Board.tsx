import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient, } from 'react-query';
import { GET_TASKS_API, CREATE_NEW_SECTION, GET_TASKS_FOR_SINGLE_SECTION, CREAT_NEW_TASK } from '../api/url';
import { makeGetRequest, makePostRequest } from '../api/utlis';
import BoardsSection from '../components/BoardSection';
import useHandleToast from '../hooks/useHandleToast';
import { appColors } from '../theme/foundations/appColor';
import { EachCardType } from '../utils/types/types';


function Board() {

  // const [boardData, setBoardData] = useState([])

  const [choosenBoard, setChoosenBoard] = useState<EachCardType>({ id: "", title: "", description: "" });
  const { handleToast } = useHandleToast();
  const queryClient = useQueryClient();

  // --- get all tasks --
  const { data } = useQuery(GET_TASKS_API, () => makeGetRequest(GET_TASKS_API));

  // --- create new task
  const { mutate: createTaskMutation } = useMutation(
    (formBody) => makePostRequest(CREAT_NEW_TASK("63a2296cb52a5d6638d61c06"), formBody),
    {
    onSuccess: (data: any) => {
      console.log(data)
      queryClient.invalidateQueries(GET_TASKS_API)
      handleToast("success", "success")
    },
    onError: (err: any) => {
      handleToast("Something went wrong", "error")
      console.log(err)
      // throw new Error("Somethings wrong in creating new section");
    }
  })



  // --- get single sections all tasks
//   const { data: sectionsAllTasksData } = useQuery(
//     "GET_TASKS_FOR_SINGLE_SECTION",
//     () => makeGetRequest(GET_TASKS_FOR_SINGLE_SECTION("63a2296cb52a5d6638d61c06")));

// console.log("sections tasks", sectionsAllTasksData)

  
  // --- create new section
  // const { mutate: createSectionMutation } = useMutation(
  //   (formBody) => makePostRequest(CREATE_NEW_SECTION, formBody),
  //   {
  //   onSuccess: (data: any) => {
  //     console.log(data)
  //     // queryClient.invalidateQueries(GET_TASKS_API)
  //     handleToast("success", "success")
  //   },
  //   onError: (err: any) => {
  //     handleToast("Something went wrong", "error")
  //     console.log(err)
  //     // throw new Error("Somethings wrong in creating new section");
  //   }
  // })



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
    // const targetId = event.target.getAttribute("data-section-Id")

    // setBoardData((prevBoardData: any) => {
    //   return prevBoardData.map((eachBoardsSection: { all_tasks: EachCardType[]; }) => {
    //     // remove selected board form the previous section
    //     const removeSelectedBoard = targetId ? eachBoardsSection.all_tasks.filter(eachBoard => choosenBoard.id !== eachBoard.id) : null

    //     return {
    //       ...eachBoardsSection,
    //       all_tasks: removeSelectedBoard || eachBoardsSection.all_tasks
    //     }
    //   }).map((eachBoardsSection: { id: string; all_tasks: EachCardType[]; }) => {
    //     // add selected board to the particular section 
    //     if (targetId === eachBoardsSection.id) {
    //       return {
    //         ...eachBoardsSection,
    //         all_tasks: [...eachBoardsSection.all_tasks, { ...choosenBoard }]
    //       }
    //     } else {
    //       return eachBoardsSection
    //     }
    //   })
    // })

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
  const handleCreateTask = (formBody: { title: string; }) => {
    // const formBody = {
    //   section_name: "new section"
    // }
    if (formBody.title !== "") {
    //@ts-ignore
    createTaskMutation(formBody)
    }

  }


  const boardData = [
    {
      id: "1",
      section_name: "first section",
    },
    {
      id: "2",
      section_name: "first section",
    },
    {
      id: "3",
      section_name: "first section",
    },
  ]

  return (
    <Flex justifyContent="space-evenly" py="1em" h="90vh" bgColor={appColors.brandDarkGray["400"]}>
      {boardData?.map(eachBoardSection => {
        return <BoardsSection
          // @ts-ignore
          sectionId={eachBoardSection.id}
          // @ts-ignore
          heading={eachBoardSection.section_name}
          // @ts-ignore
          contents={data}

          handleDragEnter={handleDragEnter}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleDragStart={handleDragStart}
          handleCreateTask={handleCreateTask}
        />
      })}
      {/* <button onClick={handleCreateSection}>CREATE SECTION</button> */}
    </Flex>
  )
}

export default Board