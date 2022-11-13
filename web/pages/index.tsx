import { Box, Link, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import TopPageContent from '../components/TopPage/TopPageContent'
import { Band } from '../src/types/Band'

type HomeProps = {
  bands: Band[]
}
const Home = (props: HomeProps) => {
  const { bands } = props
  return (
    <Box>
      <TopPageContent bands={bands}></TopPageContent>
    </Box>
  )
}

export default Home

export const getStaticProps = () => {
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
  return {
    props: { bands },
  }
}
