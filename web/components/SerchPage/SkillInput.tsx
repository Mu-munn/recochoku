import { Box, Heading, Wrap, HStack } from '@chakra-ui/react'
import { AiTwotoneFire } from 'react-icons/ai'
import { Colors } from '../../src/utils/color'

export const SkillInput = () => {
  return (
    <Box mt={5} w={'100%'}>
      <Heading fontSize={'14px'} color={Colors.heading_sub}>
        スキル
      </Heading>

      <Wrap gap={0} mt={2}>
        <Box
          border={'2px'}
          borderColor={Colors.button_main}
          borderRadius={'lg'}
          p={1}
        >
          <AiTwotoneFire color={Colors.button_main} size={'15px'} />
        </Box>
        <HStack
          border={'2px'}
          borderColor={Colors.button_main}
          borderRadius={'lg'}
          p={1}
        >
          <AiTwotoneFire color={Colors.button_main} size={'15px'} />
          <AiTwotoneFire color={Colors.button_main} size={'15px'} />
        </HStack>
        <HStack
          border={'2px'}
          borderColor={Colors.button_main}
          borderRadius={'lg'}
          p={1}
        >
          <AiTwotoneFire color={Colors.button_main} size={'15px'} />
          <AiTwotoneFire color={Colors.button_main} size={'15px'} />
          <AiTwotoneFire color={Colors.button_main} size={'15px'} />
        </HStack>
      </Wrap>
    </Box>
  )
}
