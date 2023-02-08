import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient, } from 'react-query';
import { GET_TASKS_API, CREATE_NEW_SECTION, GET_TASKS_FOR_SINGLE_SECTION, CREAT_NEW_TASK, GET_ALL_SECTIONS_API, UPDATE_SECTION_DATA } from '../api/url';
import { makeGetRequest, makePatchRequest, makePostRequest } from '../api/utlis';
import BoardsSection from '../components/BoardSection';
import useHandleToast from '../hooks/useHandleToast';
import { appColors } from '../theme/foundations/appColor';
import { EachCardType } from '../utils/types/types';
import { BiPlus } from 'react-icons/bi';
import AppIcon from './CustomElements/AppIcon';
import AppCard from './ChakraOverrides/AppCard';


function Board() {
  const { handleToast } = useHandleToast();
  const queryClient = useQueryClient();

  const [sectionName, setSectionName] = useState('');
  const [choosenBoard, setChoosenBoard] = useState({ taskid: "", sourceid: "" });
  const [createNew, setCreateNew] = useState(false);

  // --- get all Section --
  const { data, isLoading } = useQuery(GET_ALL_SECTIONS_API, () => makeGetRequest(GET_ALL_SECTIONS_API));

  // --- create new Section
  const { mutate: createSectionMutation } = useMutation(
    (formBody) => makePostRequest(CREATE_NEW_SECTION, { name: sectionName }),
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(GET_ALL_SECTIONS_API)
        handleToast("success", "success")
        setSectionName('')
        setCreateNew(false)

      },
      onError: (err: any) => {
        handleToast("Something went wrong", "error")
      }
    })

  // --- create new task in a section
  const { mutate: createTaskMutation } = useMutation(
    //@ts-ignore
    (formBody) => makePostRequest(CREAT_NEW_TASK(formBody.sectionId), { title: formBody.title, description: formBody.description }),
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(GET_ALL_SECTIONS_API)
        handleToast("success", "success")
      },
      onError: (err: any) => {
        handleToast("Something went wrong", "error")
      }
    })

  //  --- update section data on drag and drop           
  const { mutate: updateSectionMutation } = useMutation(
    (formBody) => makePatchRequest(UPDATE_SECTION_DATA, {
      //@ts-ignore
      sourceid: formBody.sourceid,
      //@ts-ignore
      destinationid: formBody.destinationid,
      //@ts-ignore
      taskid: formBody.taskid
    }
    ),
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries(GET_ALL_SECTIONS_API)
        handleToast("success", "success")
      },
      onError: (err: any) => {
        handleToast("Something went wrong", "error")
      }
    })


  const handleDragStart = (taskid: string, sourceid: string) => {
    setChoosenBoard({ taskid: taskid, sourceid: sourceid })
  }
  console.log(choosenBoard)
  // const handleDragEnd = () => {

  // }

  const handleDragOver = (event: { preventDefault: () => void }) => {
    // prevent the default behaviour of the drop target to allow drop
    event.preventDefault();

  }

  // const handleDragEnter = () => {

  // }

  // const handleDragLeave = () => {

  // }

  const handleDrop = (destination: string) => {
    //@ts-ignore
    updateSectionMutation({
      sourceid: choosenBoard.sourceid,
      destinationid: destination,
      taskid: choosenBoard.taskid,
    })
  }

  const handleEnter = (sectionname: string) => {
    if (sectionname) {
      //@ts-ignore
      createSectionMutation()
    }
  }

  return (
    <Flex columnGap={8} p="2em" h="100%" minH="90vh" bgColor={appColors.brandDarkGray["400"]}>
      {isLoading
        ?
        <div>Loading</div>
        :
        data?.map((eachSection: any) => <BoardsSection
          key={eachSection._id}
          id={eachSection._id}
          heading={eachSection.section_name}
          contents={eachSection.tasks}
          createTaskMutation={createTaskMutation}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleDragStart={handleDragStart}
        />
        )
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
          bgColor="transparent"
          border="1px solid rgb(95, 95, 97)"
          onClick={() => setCreateNew(pre => !pre)}
          mb="1em"
        >
          Add Section
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
    </Flex>
  )
}

export default Board