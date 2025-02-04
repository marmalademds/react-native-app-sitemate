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
import { SearchBar } from '../components'

export const NewsList = () => {
    const { navigation, setNavigation, NAV } = useNavigation()
    const { news } = useNews()

    const newsArticles = news.articles
    
    console.log(newsArticles)

    return (
        <View>
            <FlatList
                data={newsArticles}
                keyExtractor={(item) => item.url}
                renderItem={renderItem}
            >
            </FlatList>
        </View>
    )
}

const renderItem = (item) => {
    return (
        <View style={[
            layout.flatListItem,
            layout.row,
          ]}>
            <View
                style={[
                    layout.fw20,
                    layout.paddingSmall
                ]}
            >
                <Image
                    style={[
                        layout.thumbnail
                    ]}
                    source={{uri: item.item.urlToImage}}
                />
            </View>
            <View
                style={[
                    layout.fw80
                ]}
            >
                <View>
                    <Text
                        style={[
                            text.fsmall
                        ]}
                    >
                            {item.item.title}
                    </Text>
                </View>
                <View>
                    <Text
                        style={[
                            text.fboldsmall
                        ]}
                    >
                            by {item.item.author}
                    </Text>
                </View>

            </View>
        </View>
    )
}