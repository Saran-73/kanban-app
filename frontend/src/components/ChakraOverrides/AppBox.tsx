import { Box, useStyleConfig } from '@chakra-ui/react'

function AppBox(props: { [x: string]: any; variant: string | undefined }) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('AppBox', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />
}

export default AppBox;