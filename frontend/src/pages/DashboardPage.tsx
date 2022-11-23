import React from 'react'
import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { CREATE_GOAL_API, DELETE_GOAL_API, GET_GOALS_API, UPDATE_GOAL_API } from '../api/url'
import { makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest } from '../api/utlis'
import AppTable from '../components/AppTable'
import AppNavbar from '../components/AppNavbar'
import useHandleToast from '../hooks/useHandleToast'
import AppSidebar from '../components/AppSidebar'


function DashboardPage() {
  const [newGoal, setNewGoal] = React.useState('');
  const queryClient = useQueryClient();
  const inputRef = React.useRef(null);
  const {handleToast} = useHandleToast()


  const { data } = useQuery(GET_GOALS_API, () => makeGetRequest(GET_GOALS_API));

  const { mutate } = useMutation(
    CREATE_GOAL_API,
    (formbody: { goalname: string }) => makePostRequest(CREATE_GOAL_API, formbody),
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: [GET_GOALS_API] })
        setNewGoal("")
        handleToast("New Goal Succesfully created", "success")
      },
      onError: (err) =>{
        handleToast("Something went wrong", "error")
      }
    });
  //@ts-ignore
  const { mutate: deleteMutation } = useMutation((id) => makeDeleteRequest(DELETE_GOAL_API(id)), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_GOALS_API] })
      handleToast("Goal Deleted", "success")
    },
    onError: (err) => {
      handleToast("Something went wrong", "error")
    }
  })

  //@ts-ignore
  const { mutate: editMutation } = useMutation(({ id, formBody }) => makePutRequest(UPDATE_GOAL_API(id), formBody), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_GOALS_API] })
      handleToast("Goal Updated", "success")
    },
    onError: (err) => {
      handleToast("Something went wrong", "error")
      // console.log(err)
    }
  })

  const handleSubmit = () => {
    if (newGoal.trim() === "") return;
    mutate({ goalname: newGoal })
  }

  const handleEdit = (rowContent: { _id: string }) => {
    const updatedGoal = window.prompt("Enter the new Goal");
    if (updatedGoal) {
      //@ts-ignore
      editMutation({ id: rowContent._id, formBody: { goalname: updatedGoal } })
    }
  }

  const handleDelete = (rowContent: { _id: string, goalname: string }) => {
    const isConfirm = window.confirm(`Are you sure you want to delete ${rowContent.goalname}`)
    if (isConfirm) {
      //@ts-ignore
      deleteMutation(rowContent._id)
    }
  }

  return (
    <AppNavbar>
<AppSidebar>
      <Box maxW={{ base: "90vw", md: "60vw" }} marginInline="auto">
        <Box p="1em" marginInline="auto" mt="3em">
          <Flex direction="column" gap="1em" >
            <Text as="h3">Create a Goal</Text>
            <Input
              ref={inputRef}
              type="text"
              name="goalname"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="Your Goal"
              size="md"
              onKeyDown={(e) => {
                if (e.key === "Enter" && newGoal.trim() !== "") {
                  handleSubmit()
                }
              }}
            />
            <Button onClick={handleSubmit}>Create</Button>
          </Flex>
        </Box>
        {data?.length >= 1 && <AppTable tableData={data} handleEdit={handleEdit} handleDelete={handleDelete} />}
        </Box>
        </AppSidebar>
    </AppNavbar>
  )
}

export default DashboardPage;