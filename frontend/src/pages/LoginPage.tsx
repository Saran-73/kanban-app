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
import AppBox from "../components/ChakraOverrides/AppBox";
import AppFlex from '../components/ChakraOverrides/AppFlex';

type FormType = {
  email: string,
  password: string,
}

function LoginPage() {
  const setTokenInZustand = useStore(state => state.setToken)
  const setIsAuthorised = useStore((state) => state.setIsAuthorised)
  const { handleToast } = useHandleToast()

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
    <AppFlex variant="authPage">
      <AppBox flexBasis="50%" display="grid" alignContent="center" >
        <Box maxW="60%" ml={"6em"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            {/* @ts-ignore */}
            <Input mb="1.25em" mt="0.5em" type="email" placeholder="email" size="md" {...register("email", { required: true })} />
            <label>Password</label>
            {/* @ts-ignore */}
            <Input mb="1.25em" mt="0.5em" type="password" placeholder="password" size="md" {...register("password", { required: true })} />
            <Button variant="submitButton" type="submit">Login</Button>
          </form>
          <Text pt="1em" color="whiteAlpha.600">Don't have an account?
            <Link to={APP_REGISTER_PAGE}>
              <Text as="span" color="whiteAlpha.800"> Register here</Text>
            </Link>
          </Text>
        </Box>
      </AppBox>
      <Box flexBasis={'50%'}></Box>
    </AppFlex>
  )
}

export default LoginPage