import React from 'react'
import { Spinner, Skeleton, SkeletonCircle, SkeletonText, Stack, Code } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div>
      <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
      </Stack>
      <Spinner />

      <Code>let footerContent = "&copy; by kubilay cakmak"</Code>
    </div>
  )
}

export default Footer