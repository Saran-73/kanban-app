import React from 'react'
import { Button, Box, Input, Flex, Text} from '@chakra-ui/react'
import { APP_LOGIN_PAGE } from '../navigation/routes'
import { useNavigate,Link } from "react-router-dom";
import { makePostRequest } from '../api/utlis';
import { REGISTE_USER_API } from '../api/url';
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";


type FormType = {
  name: string,
  email: string,
  password: string,
}

function RegisterPage() {
  const navigate = useNavigate()

  const { mutate } = useMutation(
    REGISTE_USER_API,
    (formBody: {name: string, email: string, password: string }) => makePostRequest(REGISTE_USER_API, formBody),
    {
      onSuccess(data) {
        navigate(APP_LOGIN_PAGE)
      },
      onError(err) {
        console.log(err)
      }
    }
  )

  const { handleSubmit, register } = useForm<FormType>();

  const onSubmit = (data: {name: string, email: string, password: string }) => {
    mutate({ name: data.name, email: data.email, password: data.password })
  }

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box p="2em" border="1px solid red" borderRadius="8px" >
        <Box maxW="420px" >
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <Input type="text" placeholder="name" size="md" {...register("name", { required: true })} />
            <label>Email</label>
            <Input type="email" placeholder="email" size="md" {...register("email", { required: true })} />
            <label>Password</label>
            <Input type="password" placeholder="password" size="md" {...register("password", { required: true })} />
            <Button type="submit" bg="blue.300" mt="1em">Register</Button>
          </form>
        </Box>
        <Text pt="1em">Already have an account?
          <Link to={APP_LOGIN_PAGE}>
            <Text as="span" color="blue.700"> Login here</Text>
          </Link>
        </Text>
      </Box>
    </Flex>
  )
}

export default RegisterPage;