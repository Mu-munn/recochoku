import { HStack, Box, VStack, Heading, Center, Button } from '@chakra-ui/react'
import { SearchInput } from '../../components/SerchPage/instrmentInput'
import { SectionLine } from '../../components/SerchPage/SectionLine'
import { Colors } from '../../src/utils/color'
import { TbSearch } from 'react-icons/tb'
import { PlaceInput } from '../../components/SerchPage/placeInput'
import { SkillInput } from '../../components/SerchPage/SkillInput'

const serchPage = () => {
  const sectionMargin = '30px'
  return (
    <>
      <Box w={'100%'}>
        <Box h={sectionMargin}></Box>
        <SerchForm />
      </Box>
    </>
  )
}
export default serchPage

export const SerchForm = (props: any) => {
  const sectionMargin = '30px'
  const { ...rest } = props
  const instrument = ['borcal', 'base', 'drum', 'guiter', 'keybord']
  const genres = ['ROCK', 'J-POP', 'ANIME', 'R&B', 'BOCALOID', 'JAZZ', 'K-POP']

  return (
    <>
      <VStack>
        <Box
          minH={'200px'}
          w={'90%'}
          bg={Colors.background_sub}
          borderRadius={'lg'}
          p={3}
        >
          <VStack w={'90%'} m={'0 auto'}>
            <Center>
              <HStack>
                <TbSearch color={Colors.heading_sub} />
                <Heading color={Colors.heading_main}>SEARCH</Heading>
              </HStack>
            </Center>
            <SearchInput tags={instrument} title={'楽器'} />
            <SectionLine />
            <SearchInput tags={genres} title={'ジャンル'} />
            <SectionLine />
            <PlaceInput />
            <SectionLine />
            <SkillInput></SkillInput>
            <Box h={'25px'}></Box>
            <Button
              mt={'30px'}
              h={'40px'}
              w={'150px'}
              bg={Colors.button_main}
              color={'white'}
              mb={5}
            >
              検索
            </Button>
            <Box h={'15px'}></Box>
          </VStack>
        </Box>
      </VStack>
    </>
  )
}
