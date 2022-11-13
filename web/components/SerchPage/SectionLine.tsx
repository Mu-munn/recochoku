import { Center, Box } from '@chakra-ui/react'

export const SectionLine = () => {
  return (
    <>
      <Center width={'100%'} h={'30px'}>
        <Box
          width={'100%'}
          border={'2px'}
          borderRadius={'lg'}
          borderColor={'white'}
        ></Box>
      </Center>
    </>
  )
}
