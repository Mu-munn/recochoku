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
import {
  Colors,
  color_main,
  fontSize_02,
  fontSize_main,
} from '../../src/utils/color'

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
            <Heading fontSize={'25px'} color={'gray.500'} h={'20px'}>
              {band.title}
            </Heading>
            <HStack>
              {band.instruments.map((instrument) => {
                return (
                  <Text
                    fontSize={'15px'}
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
              <AiTwotoneFire color={Colors.button_main} size={fontSize_main} />
            )}
            {band.skill === 2 && (
              <HStack>
                <AiTwotoneFire
                  color={Colors.button_main}
                  size={fontSize_main}
                />
                <AiTwotoneFire
                  color={Colors.button_main}
                  size={fontSize_main}
                />
              </HStack>
            )}
            {band.skill === 3 && (
              <HStack>
                <AiTwotoneFire
                  color={Colors.button_main}
                  size={fontSize_main}
                />
                <AiTwotoneFire
                  color={Colors.button_main}
                  size={fontSize_main}
                />
                <AiTwotoneFire
                  color={Colors.button_main}
                  size={fontSize_main}
                />
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
            fontSize={fontSize_02}
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
