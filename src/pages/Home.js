import { useState } from "react"
import {
    View,
    Text,
} from 'react-native'
import { useNavigation, useNews } from "../contexts"
import { text, layout } from '../styles'
import { SearchBar, LaunchButton } from '../components'

export const Home = () => {
    const { navigation, setNavigation, NAV } = useNavigation()
    const { news, query, setQuery, setTriggerNews } = useNews()

    const newsArticles = news.articles
    
    console.log(newsArticles)

    const onChangeText = (text) => {
        setQuery(text)
    }

    const onButtonPress = () => {
        setTriggerNews(true)
        setNavigation(NAV.NEWSLIST)
    }

    return (
        <View
            style={[
                layout.fullWidth,
                layout.center,
            ]}
        >
            <Text
                style={[
                    text.heading
                ]}
            >
                News Article Search
            </Text>
            <View
                style={[
                    layout.fw80,
                ]}
            >
                <SearchBar 
                    onChangeText={onChangeText}
                    searchText={query}
                />
            </View>
            <View>
                <LaunchButton 
                    label={'Go!'}
                    onPress={onButtonPress}
                />
            </View>
        </View>
    )
}
