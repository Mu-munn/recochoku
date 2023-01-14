import { Box, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import TopPageContent from '../../components/TopPage/TopPageContent'
import { getRandomUserData } from '../../libs/dummyDataFunc'
import { Band } from '../../src/types/Band'

type ResultPageType = {
  bands: Band[]
}
const ResultPage = (props: ResultPageType) => {
  const { bands } = props
  return (
    <Box>
      <TopPageContent bands={bands}></TopPageContent>
    </Box>
  )
}

export default ResultPage

export const getStaticProps = () => {
  const bands = getRandomUserData(5)
  return {
    props: { bands },
  }
}
