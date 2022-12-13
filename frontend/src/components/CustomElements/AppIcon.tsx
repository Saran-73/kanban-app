import React from "react"
import { FC } from 'react';
import { Icon, Tooltip, VStack } from "@chakra-ui/react"

type AppIconType = {
  iconName: any;
  toolTipLabel?: String;
  customStyles?: any;
  onClick?: () => void;
}

const AppIcon: FC<AppIconType> = ({ iconName, customStyles, onClick , toolTipLabel }) => {
  return (
    <Tooltip hasArrow label={toolTipLabel} bg='brandDarkGray.400' placement="bottom" isDisabled={toolTipLabel ? false : true} p="0.5em 0.75em" fontSize="13px">
      <VStack alignItems="center" onClick={onClick}>
        <Icon as={iconName}  {...customStyles} cursor="pointer" />
      </VStack>
    </Tooltip>
  )}

export default AppIcon;