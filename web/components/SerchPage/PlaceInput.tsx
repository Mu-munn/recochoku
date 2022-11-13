import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import { Colors } from '../../src/utils/color'

export const PlaceInput = () => {
  const countries = ['北海道', '青森', '岩手', '東京', '名古屋']
  return (
    <FormControl>
      <FormLabel fontSize={'14px'} color={Colors.heading_sub}>
        居住地
      </FormLabel>
      <Select placeholder="県を選択">
        {countries.map((country) => {
          return <option key={country}>{country}</option>
        })}
      </Select>
    </FormControl>
  )
}
