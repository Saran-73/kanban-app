import { Icon } from "@chakra-ui/react"

function AppIcon({ iconName, customStyles }: {iconName: any, customStyles?: any}) {
  return <Icon as={iconName} cursor="pointer" {...customStyles} />
}

export default AppIcon