import React from 'react'
import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { CREATE_GOAL_API, DELETE_GOAL_API, GET_GOALS_API } from '../api/url'
import { makeDeleteRequest, makeGetRequest, makePostRequest } from '../api/utlis'
import AppTable from '../components/AppTable'

function DashboardPage() {
  const [newGoal, setNewGoal] = React.useState('');
  const queryClient = useQueryClient();


  const { data } = useQuery(GET_GOALS_API, () => makeGetRequest(GET_GOALS_API));

  const { mutate } = useMutation(
    CREATE_GOAL_API,
    (formbody: { goalname: string }) => makePostRequest(CREATE_GOAL_API, formbody),
     {
      onSuccess() {
         queryClient.invalidateQueries({ queryKey: [GET_GOALS_API] })
         setNewGoal("")
      }
    });
    //@ts-ignore
  const { mutate: deleteMutation } = useMutation((body) => makeDeleteRequest(DELETE_GOAL_API(body.id)), {
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: [GET_GOALS_API] })
      alert('done delete')
    },
    onError: (err) => {
      console.log(err)
    }
  })
  
  
  const handleSubmit = () => {
    if (newGoal === '') return;
    mutate({ goalname: newGoal })
  }
  const handleEdit = () => {
  }

  const handleDelete = (rowContent: { _id: string }) => {
    //@ts-ignore
     deleteMutation({id: rowContent._id})
  }

  return (
    <Box minH="100vh">
      <Box maxW={{ base: "90vw", md: "60vw" }} marginInline="auto">
      <Box p="1em" marginInline="auto" mt="3em">
        <Flex direction="column" gap="1em" >
          <Text as="h3">Create a Goal</Text>
          <Input
            type="text"
            name="goalname"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Your Goal"
            size="md"
          />
          <Button onClick={handleSubmit}>Create</Button>
        </Flex>
      </Box>
        {data && <AppTable tableData={data} handleEdit={handleEdit} handleDelete={handleDelete} />}
        </Box>
    </Box>
  )
}

export default DashboardPage;