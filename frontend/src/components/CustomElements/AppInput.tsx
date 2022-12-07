import { Input } from '@chakra-ui/react'
import React from 'react'
// import { FC, forwardRef, ReactNode, Ref } from 'react';

const AppInput =
    React.forwardRef(({ isRequired, type, placeholderText, size, customStyles, props }: { customStyles?: object, isRequired?: boolean, type: string, placeholderText: string, size?: string, props?: any }, ref) => {
        console.log(props)
        return (
                <Input
                    //@ts-ignore
                    ref={ref}
                    type={type}
                    placeholder={placeholderText}
                    size={size}
                    style={{ ...customStyles }}
                    required={isRequired}
                {...props}
                />
        )
    })


export default AppInput