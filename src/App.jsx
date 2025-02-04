import { useEffect } from 'react'
import { 
  SafeAreaView, 
  Text,
  ActivityIndicator,
} from 'react-native'
import {
} from './pages'
import {
} from './contexts'
import {
  text,
  layout
} from './styles'

export const App = () => {
  return (
    <SafeAreaView
      style={[
        layout.app,
      ]}
    >
      <RootNavigator />
    </SafeAreaView>
  )
}

const RootNavigator = () => {
  // const { navigation, setNavigation, NAV } = useNavigation()
  // const { randomUsersIsLoading } = useRandomUser()
  // console.log(navigation)

  // useEffect(() => {
  //   if (randomUsersIsLoading) {
  //     console.log('Loading users...')
  //   }
  //   else {
  //     console.log('Users loaded')
  //   }
  // }, [randomUsersIsLoading])

  // if (randomUsersIsLoading) {
  //   return (
  //     <ActivityIndicator size="large" color="#0000ff" />
  //   )
  // }

  // switch (navigation) {
  //   case NAV.HOME:
  //     return <List />;
  //   case NAV.DETAIL:
  //     return <BookDetailScreen />;
  //   case NAV.COUNTER:
  //     return <Counter />;
  //   case NAV.USERS:
  //     return <Users />;
  //   default:
  //     return null;
  // }

  return (
    <Text>Hello World</Text>
  )
}

export default App