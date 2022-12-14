import React, { useRef } from 'react'
import { Button, Box, Input, Flex, Text } from '@chakra-ui/react'
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
    <AppFlex variant="authPage" >
      <AppBox variant={"registrationForm"} >
        <Box maxW="420px" >
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Name:
            </label>
            <Input type="text" placeholder="your name" size="md" {...register("name", { required: true })} />

            {/* <AppInput
              //@ts-ignore
              // ref={refInput}
              type='text'
              placeholderText={'Your Name'}
              size={'md'}
              isRequired
              {...register("name", { required: true })}
            /> */}
            {/* <AppInput
              //@ts-ignore
              // ref={refInput}
              type='text'
              placeholderText={'Your Organisation'}
              size={'md'}
              isRequired
              {...register("organisation", { required: true })}
             /> */}

            <label>Email</label>
            <Input type="email" placeholder="email" size="md" {...register("email", { required: true })} />
            <label>Password</label>
            <Input type="password" placeholder="password" size="md" {...register("password", { required: true })} />
            <Button type="submit" variant="submitButton">Register</Button>
          </form>
        </Box>
        <Text pt="1em">Already have an account?
          <Link to={APP_LOGIN_PAGE}>
            <Text as="span" color="blue.700"> Login here</Text>
          </Link>
        </Text>
      </AppBox>
    </AppFlex>
  )
}

export default RegisterPage;