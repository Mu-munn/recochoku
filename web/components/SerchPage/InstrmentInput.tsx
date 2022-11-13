import { Box, Flex, Heading, HStack, Tag, Wrap } from '@chakra-ui/react'
import { useState } from 'react'
import { Colors } from '../../src/utils/color'

type SearchInputProps = {
  tags: string[]
  title: string
}
export const SearchInput = (props: SearchInputProps) => {
  const { tags, title } = props

  return (
    <>
      <Box mt={5} w={'100%'}>
        <Heading fontSize={'14px'} color={Colors.heading_sub}>
          {title}
        </Heading>

        <Wrap gap={2} mt={2}>
          {tags.map((tag) => (
            <InstrmentTag text={tag} key={tag} />
          ))}
        </Wrap>
      </Box>
    </>
  )
}

type InstrmentTagProps = {
  text: string
}
export const InstrmentTag = (props: InstrmentTagProps) => {
  const { text } = props
  const [isSelected, setIsSelected] = useState(false)
  return (
    <>
      <Tag
        fontWeight={'bold'}
        size={'md'}
        variant={'solid'}
        border="2px"
        borderColor={isSelected ? Colors.button_main : Colors.button_main}
        bg={isSelected ? Colors.button_main : 'white'}
        color={isSelected ? 'white' : Colors.button_main}
        onClick={(e) => {
          setIsSelected(!isSelected)
        }}
      >
        {text}
      </Tag>
    </>
  )
}
