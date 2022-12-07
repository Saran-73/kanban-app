import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
  
//@ts-ignore
function AppModal({onModalClose, isModalOpen}) {
    return (
      <>  
        <Modal isOpen={isModalOpen} onClose={onModalClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                fsafds
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onModalClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AppModal