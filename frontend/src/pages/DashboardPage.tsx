import React from 'react'
import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { CREATE_GOAL_API, GET_GOALS_API } from '../api/url'
import { makeGetRequest, makePostRequest } from '../api/utlis'
import AppTable from '../components/AppTable'

function DashboardPage() {
  const [newGoal, setNewGoal] = React.useState('');
  const queryClient = useQueryClient()


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

  const handleSubmit = () => {
    if (newGoal === '') return;
    mutate({ goalname: newGoal })
  }

  return (
    <Box minH="100vh">
      <Box maxW="50vw" p="1em" border="2px solid gray" marginInline="auto" mt="3em">
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
      <Box maxW="50vw" p="1em" border="2px solid white" marginInline="auto" mt="3em">
        {data?.map((eachGoal: { goalname: string }) => <h2 key={eachGoal.goalname}>{eachGoal.goalname}</h2>)}
      </Box>

      <AppTable />
    </Box>
  )
}

export default DashboardPage;