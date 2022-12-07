import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
  
function AppMenu({ children, menuItems }) {
  return (
    <Menu isLazy>
      <MenuButton
         transition='all 0.2s'
         _hover={{  }}
         _expanded={{ color:"yellow.500" }}
        _focus={{ }}
         >
    {children}
    </MenuButton>
      <MenuList>
        {menuItems.map(eachMenuItem =>
          <MenuItem
            color={eachMenuItem.color || "initial"}
            onClick={eachMenuItem.onClickHandle}
          >
            {eachMenuItem.text}
          </MenuItem>
        )}
  </MenuList>
</Menu>
  )
}

export default AppMenu