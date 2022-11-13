import { Box, Link, VStack } from '@chakra-ui/react'
import { Band } from '../../src/types/Band'
import { Colors } from '../../src/utils/color'
import { BandCard } from '../Band/BandCard'

const TopPageContent = () => {
  const bands: Band[] = [
    {
      title: '初心者同好会',
      instruments: ['guiter', 'bocal'],
      skill: 3,
      residence: 5,
      description:
        '初心者きてええええええええええええええええええええええええええええええええええええええええええ！',
      iconUrl: 'https://bit.ly/dan-abramov',
    },
    {
      title: 'うんうんうん',
      instruments: ['guiter', 'bocal'],
      skill: 1,
      residence: 5,
      description: '初心者きてえええええええ！',
      iconUrl: 'https://bit.ly/sage-adebayo',
    },
  ]
  return (
    <VStack py={4}>
      <VStack
        minH={'95vh'}
        w={'90%'}
        bg={Colors.background_sub}
        borderRadius={'lg'}
        p={3}
      >
        {bands.map((band) => {
          return <BandCard key={band.title} band={band} />
        })}
        <Link href="/serchPage">goto serchPage</Link>
      </VStack>
    </VStack>
  )
}
export default TopPageContent
