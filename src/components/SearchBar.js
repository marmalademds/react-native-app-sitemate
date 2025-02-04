import { TextInput } from "react-native"
import { text, layout } from '../styles'

export const SearchBar = (props) => {
    const { onChangeText, searchText } = props
  
    return (
      <TextInput 
        style = {[
          layout.searchBar
        ]}
        onChangeText={onChangeText}
        value={searchText}
        placeholder="Search Keyword"
      />
    )
}