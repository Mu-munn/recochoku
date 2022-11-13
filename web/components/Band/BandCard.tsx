import {
  VStack,
  Box,
  HStack,
  Avatar,
  Heading,
  Stack,
  Text,
  Center,
} from '@chakra-ui/react'
import { AiTwotoneFire } from 'react-icons/ai'
import { RiChat1Fill } from 'react-icons/ri'
import { Band } from '../../src/types/Band'
import { Colors, color_main } from '../../src/utils/color'

type BandCardProps = {
  band: Band
}
export const BandCard = (props: BandCardProps) => {
  const { band } = props

  return (
    <Box w={'90%'} bg={'white'} borderRadius={'20px'} p={5}>
      <HStack>
        <Avatar name="Dan Abrahmov" src={band.iconUrl} />
        <Box>
          <Stack>
            <Heading fontSize={'20px'} color={'gray.500'} h={'20px'}>
              {band.title}
            </Heading>
            <HStack>
              {band.instruments.map((instrument) => {
                return (
                  <Text
                    fontSize={'10px'}
                    fontWeight={'bold'}
                    color={Colors.button_main}
                    key={instrument}
                  >
                    {instrument}
                  </Text>
                )
              })}
            </HStack>
            {band.skill === 1 && (
              <AiTwotoneFire color={Colors.button_main} size={'13px'} />
            )}
            {band.skill === 2 && (
              <HStack>
                <AiTwotoneFire color={Colors.button_main} size={'13px'} />
                <AiTwotoneFire color={Colors.button_main} size={'13px'} />
              </HStack>
            )}
            {band.skill === 3 && (
              <HStack>
                <AiTwotoneFire color={Colors.button_main} size={'13px'} />
                <AiTwotoneFire color={Colors.button_main} size={'13px'} />
                <AiTwotoneFire color={Colors.button_main} size={'13px'} />
              </HStack>
            )}
          </Stack>
        </Box>
      </HStack>

      {/* description area */}
      <Center mt={'10px'}>
        <HStack>
          <RiChat1Fill color={Colors.button_main} size={'26px'} />
          <Text
            w={'90%'}
            fontSize={'10px'}
            fontWeight={'bold'}
            color={Colors.heading_sub}
            noOfLines={2}
          >
            {band.description}
          </Text>
        </HStack>
      </Center>
    </Box>
  )
}
