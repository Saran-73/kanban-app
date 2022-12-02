import React from 'react'
import { Button, Box, Input, Flex, Text } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import useStore from '../store/store';
import { useMutation } from "react-query";
import { makePostRequest } from '../api/utlis';
import { LOGIN_USER_API } from '../api/url';
import { useNavigate, Link } from "react-router-dom";
import { APP_DASHBOARD, APP_REGISTER_PAGE } from '../navigation/routes';
import useHandleToast from '../hooks/useHandleToast';
import  AppBox  from "../components/ChakraOverrides/AppBox";

type FormType = {
  email: string,
  password: string,
}

function LoginPage() {
  const setTokenInZustand = useStore(state => state.setToken)
  const setIsAuthorised = useStore((state) => state.setIsAuthorised)
  const {handleToast} = useHandleToast()

  const navigate = useNavigate()

  const { mutate } = useMutation(
    LOGIN_USER_API,
    (formBody: { email: string, password: string }) => makePostRequest(LOGIN_USER_API, formBody),
    {
      onSuccess(data) {
        setTokenInZustand({ token: data.token })
        localStorage.setItem("token", data.token)
        setIsAuthorised(true)
        navigate(APP_DASHBOARD)
        // refresh the page , a temporary solution which prevents 
        // the user from going back to login  page
        navigate(0)
      },
      onError(err) {
        //@ts-ignore
        handleToast(err.response.data.message, "error")
        // console.log(err)
      }
    }
  )

  const { handleSubmit, register } = useForm<FormType>();

  const onSubmit = (data: { email: string, password: string }) => {
    mutate({ email: data.email, password: data.password })
  }



  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <AppBox variant={"loginForm"}>
        <Box maxW="420px" pt="1em" pb="1em">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <Input mt="6px" mb="8px" type="email" placeholder="email" size="md" {...register("email", { required: true })} />
            <label>Password</label>
            <Input  mt="6px" mb="8px" type="password" placeholder="password" size="md" {...register("password", { required: true })} />
            <Button variant="submitButton" type="submit">Login</Button>
          </form>
        </Box>
        <Text pt="1em">Don't have an account?
          <Link to={APP_REGISTER_PAGE}>
            <Text as="span" color="blue.700"> Register here</Text>
          </Link>
        </Text>
      </AppBox>
    </Flex>
  )
}

export default LoginPage