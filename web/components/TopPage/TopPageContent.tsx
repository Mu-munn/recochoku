import { Box, Link, VStack, Button } from '@chakra-ui/react'
import { IoSearchSharp } from 'react-icons/io5'
import { Band } from '../../src/types/Band'
import { Colors } from '../../src/utils/color'
import { BandCard } from '../Band/BandCard'

type TopPageContentProps = {
  bands: Band[]
}
const TopPageContent = (props: TopPageContentProps) => {
  // const bands: Band[] = [
  //   {
  //     title: '初心者同好会',
  //     instruments: ['guiter', 'bocal'],
  //     skill: 3,
  //     residence: 5,
  //     description:
  //       '初心者きてええええええええええええええええええええええええええええええええええええええええええ！',
  //     iconUrl: 'https://bit.ly/dan-abramov',
  //   },
  //   {
  //     title: 'うんうんうん',
  //     instruments: ['guiter', 'bocal'],
  //     skill: 1,
  //     residence: 5,
  //     description: '初心者きてえええええええ！',
  //     iconUrl: 'https://bit.ly/sage-adebayo',
  //   },
  // ]
  const { bands } = props
  return (
    <VStack py={4}>
      <VStack
        minH={'95vh'}
        w={{ base: '100%', lg: '50%' }}
        bg={Colors.background_sub}
        borderRadius={'lg'}
        p={3}
      >
        {bands.map((band: Band) => {
          return <BandCard key={band.title} band={band} />
        })}
        <Button bgColor="#e79827" color={'white'} display="block">
          <Link href="/serchPage" display="flex">
            <IoSearchSharp />
            しらべる
          </Link>
        </Button>
      </VStack>
    </VStack>
  )
}
export default TopPageContent
