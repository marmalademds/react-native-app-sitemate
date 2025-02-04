import { useEffect } from 'react'
import { 
  SafeAreaView, 
  Text,
  ActivityIndicator,
} from 'react-native'
import {
  Home,
  Detail,
  NewsList,
} from './pages'
import { useNews, useNavigation, NavigationProvider, NewsProvider } from './contexts'
import {
  text,
  layout
} from './styles'

export const App = () => {
  return (
    <NavigationProvider>
      <NewsProvider>
        <SafeAreaView
          style={[
            layout.container,
            {
              backgroundColor: '#cfefff'
            }
          ]}
        >
          <RootNavigator />
        </SafeAreaView>
      </NewsProvider>
    </NavigationProvider>
  )
}

const RootNavigator = () => {
  const { navigation, setNavigation, NAV } = useNavigation()
  const { newsIsLoading } = useNews()

  if (newsIsLoading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" />
    )
  }

  switch (navigation) {
      case NAV.HOME:
        return <Home />
      case NAV.NEWSLIST:
        return <NewsList />
      case NAV.DETAIL:
        return <Detail />
      default: return null
  }
}

export default App