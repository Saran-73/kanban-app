import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient, } from 'react-query';
import { GET_TASKS_API, CREATE_NEW_SECTION, GET_TASKS_FOR_SINGLE_SECTION, CREAT_NEW_TASK, GET_ALL_SECTIONS_API } from '../api/url';
import { makeGetRequest, makePostRequest } from '../api/utlis';
import BoardsSection from '../components/BoardSection';
import useHandleToast from '../hooks/useHandleToast';
import { appColors } from '../theme/foundations/appColor';
import { EachCardType } from '../utils/types/types';
import { BiPlus } from 'react-icons/bi';
import AppIcon from './CustomElements/AppIcon';
import AppCard from './ChakraOverrides/AppCard';


function Board() {

  // const [choosenBoard, setChoosenBoard] = useState<EachCardType>({ id: "", title: "", description: "" });
  const { handleToast } = useHandleToast();
  const queryClient = useQueryClient();

  const [sectionName, setSectionName] = useState('');
  const [createNew, setCreateNew] = useState(false);

  // --- get all Section --
  const { data, isLoading } = useQuery(GET_ALL_SECTIONS_API, () => makeGetRequest(GET_ALL_SECTIONS_API));

  // --- create new Section
  const { mutate: createTaskMutation } = useMutation(
    (formBody) => makePostRequest(CREATE_NEW_SECTION, { name: sectionName }),
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(GET_ALL_SECTIONS_API)
        handleToast("success", "success")
        setSectionName('')

      },
      onError: (err: any) => {
        handleToast("Something went wrong", "error")
      }
    })

  // // --- create new task
  // const { mutate: createTaskMutation } = useMutation(
  //   (formBody) => makePostRequest(CREAT_NEW_TASK("63a2296cb52a5d6638d61c06"), formBody),
  //   {
  //     onSuccess: (data: any) => {
  //       queryClient.invalidateQueries(GET_TASKS_API)
  //       handleToast("success", "success")
  //     },
  //     onError: (err: any) => {
  //       handleToast("Something went wrong", "error")
  //       // throw new Error("Somethings wrong in creating new section");
  //     }
  //   })


  console.log(data)


  const handleDragStart = (singleBoardContents: EachCardType) => {
    // setChoosenBoard(singleBoardContents)
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
  }
  const handleEnter = (sectionname: string) => {
    if (sectionname) {
      //@ts-ignore
      createTaskMutation()
    }
  }

  const handleCreateSection = () => {
    setCreateNew(pre => !pre)
  }

  return (
    <Flex columnGap={8} p="2em" h="100%" minH="90vh" bgColor={appColors.brandDarkGray["400"]}>
      {isLoading
        ?
        <div>Loading</div>
        :
        data.map((eachSection: any) => <BoardsSection heading={eachSection.section_name} />)
      }

      <Box
        w="20vw"
        p="1em 2em"
        borderRadius="0.45em"
        maxH="fit-content"
      >
        <Button
          rightIcon={<AppIcon iconName={BiPlus} />}
          fontSize="sm"
          fontWeight="bold"
          borderRadius={'0.25em'}
          width="100%"
          color="white"
          bgColor="rgb(95, 95, 97)"
          onClick={handleCreateSection}
          mb="1em"
        >
          Create New Section
        </Button>

        {createNew &&
          <AppCard variant="taskCard" display="grid" placeContent="center">
            <Input
              // ref={sectionInputRef}
              type="text"
              name="sectionName"
              value={sectionName}
              size="sm"
              onChange={(e) => setSectionName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleEnter(sectionName)
                }
              }}
            />
          </AppCard>
        }
      </Box>
      {/* {boardData?.map(eachBoardSection => {
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
      })} */}
    </Flex>
  )
}

export default Board