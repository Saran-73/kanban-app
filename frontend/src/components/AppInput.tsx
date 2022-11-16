import { Input } from '@chakra-ui/react'
import React from 'react'


const AppInput =
    React.forwardRef(({ isRequired, type, placeholderText, size, InputLabel, customStyles }: { customStyles?: object, InputLabel: string, isRequired?: boolean, type: string, placeholderText: string, size?: string }, ref) => {
        return (
            <>
                <label>
                    {InputLabel}
                </label>
                <Input
                    //@ts-ignore
                    ref={ref}
                    type={type}
                    placeholder={placeholderText}
                    size={size}
                    style={{ ...customStyles }}
                    required={isRequired}
                />
            </>
        )
    })


export default AppInput