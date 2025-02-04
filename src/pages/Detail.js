import { useState } from "react"
import {
    Text,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'
import { useNavigation, useNews } from "../contexts"
import { text, layout } from '../styles'
import { LaunchButton } from "../components"

export const Detail = () => {
    const { navigation, setNavigation, NAV } = useNavigation()
    const { news, setNews, selectedArticle } = useNews()

    const title = selectedArticle.title
    const author = selectedArticle.author
    const content = selectedArticle.content

    const onBackPress = () => {
        setNavigation(NAV.NEWSLIST)
    }

    return (
        <View>
            <LaunchButton 
            label={'Back'}
            onPress={onBackPress}
            />
            <View
                style={[
                    {
                        backgroundColor: '#6fbbd6'
                    }
                ]}
            >
                <Text
                    style={[
                        text.heading
                    ]}
                >
                    {title}
                </Text>
                <Text>
                    {author}
                </Text>

                <Text>
                    {content}
                </Text>
            </View>
        </View>
    )
}