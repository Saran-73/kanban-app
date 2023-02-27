import React, { useRef } from 'react'
import { Button, Box, Input, Flex, Text, VStack, Stack } from '@chakra-ui/react'
import { APP_LOGIN_PAGE } from '../navigation/routes'
import { useNavigate, Link } from "react-router-dom";
import { makePostRequest } from '../api/utlis';
import { REGISTE_USER_API } from '../api/url';
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import AppInput from '../components/CustomElements/AppInput';
import AppBox from '../components/ChakraOverrides/AppBox';
import AppFlex from '../components/ChakraOverrides/AppFlex';


type FormType = {
  name: string,
  email: string,
  password: string,
}

function RegisterPage() {
  const navigate = useNavigate()

  const { mutate } = useMutation(
    REGISTE_USER_API,
    (formBody: FormType) => makePostRequest(REGISTE_USER_API, formBody),
    {
      onSuccess(data) {
        navigate(APP_LOGIN_PAGE)
      },
      onError(err) {
        console.log(err)
      }
    }
  )

  const { handleSubmit, register, watch } = useForm<FormType>();

  const onSubmit = (data: FormType) => {
    mutate({ name: data.name, email: data.email, password: data.password })
  }

  // const refInput = React.useRef()

  return (
    <AppFlex variant="authPage">
      <AppBox flexBasis="50%" display="grid" alignContent="center">
        <Box maxW="60%" ml={"6em"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Name:
            </label>
            <Input mb="1.25em" mt="0.5em" type="text" placeholder="your name" size="md" {...register("name", { required: true })} />
            <label>Email</label>
            <Input mb="1.25em" mt="0.5em" type="email" placeholder="email" size="md" {...register("email", { required: true })} />
            <label>Password</label>
            <Input
              mb="1.25em"
              mt="0.5em"
              type="password"
              placeholder="password"
              size="md" {...register("password", { required: true })}

            />
            <Button type="submit" variant="submitButton">Register</Button>
          </form>

          <Text pt="1em" color="whiteAlpha.600">Already have an account?
            <Link to={APP_LOGIN_PAGE}>
              <Text as="span" color="whiteAlpha.800"> Login here</Text>
            </Link>
          </Text>
        </Box>

      </AppBox>
      <Box flexBasis={'50%'} ></Box>
    </AppFlex >
  )
}

export default RegisterPage;