import { Avatar } from '@chakra-ui/react'
import React from 'react'

function AppAvatar({ src, size = "sm", name, customStyles }: { src?: string, size?: string, name: string, customStyles?: any }) {
  return (
      <Avatar size={size} name={name} src={src} cursor="pointer" {...customStyles} />
  )
}

export default AppAvatar