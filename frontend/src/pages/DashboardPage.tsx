import React from 'react'
import { Box, Flex, Text, Input, Button } from '@chakra-ui/react'
import { useMutation, useQuery } from "react-query"
import { CREATE_GOAL_API, GET_USER_GOALS_API } from '../api/url'
import { makeGetRequest, makePostRequest } from '../api/utlis'

function DashboardPage() {
  const [newGoal, setNewGoal] = React.useState('');

  const { data, isError } = useQuery(GET_USER_GOALS_API, () => makeGetRequest(GET_USER_GOALS_API));

  const { mutate } = useMutation(CREATE_GOAL_API,
    (formbody: { goalname: string }) => makePostRequest(formbody));

  const handleSubmit = () => {
    if (newGoal === '') return;
    mutate({ goalname: newGoal })
  }

  console.log(data?.data)

  return (
    <Box minH="100vh">
      <Box>
        <Flex>
          <Text>Create a Goal</Text>
          <Input
            type="text"
            name="goalname"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Your Goal" size="md" />
          <Button onClick={handleSubmit}>Create</Button>
        </Flex>
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default DashboardPage;