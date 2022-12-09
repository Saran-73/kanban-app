import React from "react"
import { FC } from 'react';
import { Box, Icon, Tooltip } from "@chakra-ui/react"

type AppIconType = {
  iconName: any;
  toolTipText?: String;
  customStyles?: any;
  onClick?: () => void;
  noToolTip?: boolean;
}

const AppIcon: FC<AppIconType> = ({ iconName, customStyles, onClick , noToolTip = false, toolTipText = "view" }) => {
  return (
    <Tooltip hasArrow label={toolTipText} bg='gray.300' color='black' placement="bottom" isDisabled={noToolTip} >
      <Box>
        <Icon as={iconName}  {...customStyles} cursor="pointer" onClick={onClick} />
      </Box>
    </Tooltip>
  )}

export default AppIcon