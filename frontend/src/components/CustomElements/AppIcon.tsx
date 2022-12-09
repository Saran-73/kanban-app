import React from "react"
import { FC } from 'react';
import { Box, Icon, Tooltip } from "@chakra-ui/react"

type AppIconType = {
  iconName: any;
  toolTipLabel?: String;
  customStyles?: any;
  onClick?: () => void;
}

const AppIcon: FC<AppIconType> = ({ iconName, customStyles, onClick , toolTipLabel }) => {
  return (
    <Tooltip hasArrow label={toolTipLabel} bg='gray.300' color='black' placement="bottom" isDisabled={toolTipLabel ? false : true} >
      <Box>
        <Icon as={iconName}  {...customStyles} cursor="pointer" onClick={onClick} />
      </Box>
    </Tooltip>
  )}

export default AppIcon