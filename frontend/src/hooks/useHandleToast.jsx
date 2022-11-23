import { useToast } from '@chakra-ui/react';

function useHandleToast() {
    const toast = useToast()
    
const handleToast = (title, status) => toast({
    title: title,
    status: status,
    duration: 2000,
    isClosable: true,
  })

return {handleToast}
}

export default useHandleToast;