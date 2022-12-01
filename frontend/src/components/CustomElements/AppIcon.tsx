import { Icon } from "@chakra-ui/react"

function AppIcon({ iconName }: {iconName: any}) {
  return  <Icon as={iconName} cursor="pointer" />
}

export default AppIcon