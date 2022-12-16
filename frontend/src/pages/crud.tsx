import React from 'react'
import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { CREATE_GOAL_API, DELETE_GOAL_API, GET_GOALS_API, UPDATE_GOAL_API } from '../api/url'
import { makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest } from '../api/utlis'
import AppTable from '../components/AppTable'
import useHandleToast from '../hooks/useHandleToast'


function Crud() {
  const [newTask, setNewTask] = React.useState('');
  const queryClient = useQueryClient();
  const inputRef = React.useRef(null);
  const {handleToast} = useHandleToast()


  const { data } = useQuery(GET_GOALS_API, () => makeGetRequest(GET_GOALS_API));

  const { mutate } = useMutation(
    CREATE_GOAL_API,
    (formbody: { taskname: string }) => makePostRequest(CREATE_GOAL_API, formbody),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: [GET_GOALS_API] })
        setNewTask("")
        handleToast("New Task Succesfully created", "success")
      },
      onError: (err) =>{
        handleToast("Something went wrong", "error")
      }
    });
  //@ts-ignore
  const { mutate: deleteMutation } = useMutation((id) => makeDeleteRequest(DELETE_GOAL_API(id)), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_GOALS_API] })
      handleToast("Task Deleted", "success")
    },
    onError: (err) => {
      handleToast("Something went wrong", "error")
    }
  })

  //@ts-ignore
  const { mutate: editMutation } = useMutation(({ id, formBody }) => makePutRequest(UPDATE_GOAL_API(id), formBody), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_GOALS_API] })
      handleToast("Task Updated", "success")
    },
    onError: (err) => {
      handleToast("Something went wrong", "error")
      // console.log(err)
    }
  })

  const handleSubmit = () => {
    if (newTask.trim() === "") return;
    mutate({ taskname: newTask })
  }

  const handleEdit = (rowContent: { _id: string }) => {
    const updatedTask = window.prompt("Enter the new Task");
    if (updatedTask) {
      //@ts-ignore
      editMutation({ id: rowContent._id, formBody: { taskname: updatedTask } })
    }
  }

  const handleDelete = (rowContent: { _id: string, taskname: string }) => {
    const isConfirm = window.confirm(`Are you sure you want to delete ${rowContent.taskname}`)
    if (isConfirm) {
      //@ts-ignore
      deleteMutation(rowContent._id)
    }
  }

  return (
      <Box maxW={{ base: "90vw", md: "60vw" }} marginInline="auto">
        <Box p="1em" marginInline="auto" mt="3em">
          <Flex direction="column" gap="1em" >
            <Text as="h3">Create a Task</Text>
            <Input
              ref={inputRef}
              type="text"
              name="taskname"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Your Task"
              size="md"
              onKeyDown={(e) => {
                if (e.key === "Enter" && newTask.trim() !== "") {
                  handleSubmit()
                }
              }}
            />
            <Button onClick={handleSubmit}>Create</Button>
          </Flex>
        </Box>
        {data?.length >= 1 && <AppTable tableData={data} handleEdit={handleEdit} handleDelete={handleDelete} />}
        </Box>
  )
}

export default Crud;