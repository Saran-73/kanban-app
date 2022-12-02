import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
} from '@chakra-ui/react'
import { BiCaretDown } from "react-icons/bi";
import AppIcon from './CustomElements/AppIcon';
  
interface AppAccordionType{
    title: string;
    endText?: string;
}

const AppAccordion = ({ title, endText }: AppAccordionType)=>{
  return (
    <Accordion allowMultiple allowToggle defaultIndex={[0, 1, 2]}>
    <AccordionItem border="0">
      <h2>
        <AccordionButton borderBottom="1px solid lightgrey" px="0" _hover={{bg: "none"}}>
          <Box flex='1' textAlign='left'>
            {title}
          </Box>
          <AppIcon iconName={BiCaretDown} customStyles={{ color: "gray" }} />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} px="0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>

  </Accordion>
  )
}

export default AppAccordion;