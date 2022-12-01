import { Box, useStyleConfig } from '@chakra-ui/react'

function AppCard(props: { [x: string]: any; variant: any; }) {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Card', { variant })

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />
}

export default AppCard;