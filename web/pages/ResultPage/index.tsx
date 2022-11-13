import { Box, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import TopPageContent from '../../components/TopPage/TopPageContent'
import { Band } from '../../src/types/Band'

type ResultPage = {
  bands: Band[]
}
const ResultPage: NextPage = () => {
  return (
    <Box>
      <TopPageContent bands={[]}></TopPageContent>
    </Box>
  )
}

export default ResultPage

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
  ]
  return {
    props: { bands },
  }
}
