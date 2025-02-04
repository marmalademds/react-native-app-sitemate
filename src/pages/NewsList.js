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
import { SearchBar, LaunchButton } from '../components'

export const NewsList = () => {
    const { navigation, setNavigation, NAV } = useNavigation()
    const { news, setNews, setSelectedArticle } = useNews()

    const newsArticles = news?.articles 

    if (!newsArticles) {
        return <Text>No articles found!</Text>
    }
    
    console.log(newsArticles)

    const onBackPress = () => {
        setNavigation(NAV.HOME)
        setNews([])
    }

    const onSelectArticle = (item) => {
        setSelectedArticle(item)
        setNavigation(NAV.DETAIL)
    }

    return (
        <View>
            <LaunchButton 
                label={'Back'}
                onPress={onBackPress}
            />
            <FlatList
                data={newsArticles}
                keyExtractor={(item) => item.url}
                renderItem={({item}) => renderItem({item, onPress: onSelectArticle})}
            >
            </FlatList>
        </View>
    )
}

const renderItem = ({item, onPress}) => {
    return (
        <TouchableOpacity
        onPress={() => onPress(item)}
            >
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
                        source={{uri: item.urlToImage}}
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
                                {item.title}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={[
                                text.fboldsmall
                            ]}
                        >
                                by {item.author}
                        </Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}