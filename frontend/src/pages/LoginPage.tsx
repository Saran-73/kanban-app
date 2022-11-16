import React from 'react'
import { Button, Box, Input, Flex, Text } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import useStore from '../store/store';
import { useMutation } from "react-query";
import { makePostRequest } from '../api/utlis';
import { LOGIN_USER_API } from '../api/url';
import { useNavigate, Link } from "react-router-dom";
import { APP_DASHBOARD, APP_REGISTER_PAGE } from '../navigation/routes';

type FormType = {
  email: string,
  password: string,
}

function LoginPage() {
  const setTokenInZustand = useStore(state => state.setToken)
  const navigate = useNavigate()

  const { mutate } = useMutation(
    LOGIN_USER_API,
    (formBody: { email: string, password: string }) => makePostRequest(LOGIN_USER_API, formBody),
    {
      onSuccess(data) {
        setTokenInZustand({ token: data.token })
        localStorage.setItem("token", data.token)
        navigate(APP_DASHBOARD)
      },
      onError(err) {
        console.log(err)
      }
    }
  )

  const { handleSubmit, register } = useForm<FormType>();

  const onSubmit = (data: { email: string, password: string }) => {
    mutate({ email: data.email, password: data.password })
  }


  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box p="1em 2em" border="5px solid white" borderRadius="16px" bg="whiteAlpha.300">
        <Box maxW="420px" pt="1em" pb="1em">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <Input mt="6px" mb="8px" type="email" placeholder="email" size="md" {...register("email", { required: true })} />
            <label>Password</label>
            <Input mt="6px" mb="8px" type="password" placeholder="password" size="md" {...register("password", { required: true })} />
            <Button type="submit" bg="blue.300" mt="1em">Login</Button>
          </form>
        </Box>
        <Text pt="1em">Don't have an account?
          <Link to={APP_REGISTER_PAGE}>
            <Text as="span" color="blue.700"> Register here</Text>
          </Link>
        </Text>
      </Box>
    </Flex>
  )
}

export default LoginPage