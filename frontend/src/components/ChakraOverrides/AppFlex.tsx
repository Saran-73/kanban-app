import { Box, useStyleConfig } from '@chakra-ui/react'

function AppFlex(props: { [x: string]: any; variant?: string | undefined }) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('AppFlex', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />
}

export default AppFlex;