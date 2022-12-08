import { Icon } from "@chakra-ui/react"
import React from "react"
import { FC, forwardRef, Ref } from 'react';

type AppIconType = {
  iconName: any;
  customStyles?: any;
  ref?: Ref<any>;
}

const AppIcon:FC<AppIconType> = forwardRef(({ iconName, customStyles } , ref) => {
  return <Icon as={iconName}  {...customStyles} ref={ref} cursor="pointer" _hover={{ }} />
})

export default AppIcon