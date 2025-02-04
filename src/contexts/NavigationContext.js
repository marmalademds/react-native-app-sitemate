import { createContext, useContext, useState } from "react"

const NAV = {
    HOME: 'HOME',
    NEWSLIST: 'NEWSLIST',
    DETAIL: 'DETAIL',
}

const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {
    const [navigation, setNavigation] = useState(NAV.HOME)

    return (
        <NavigationContext.Provider
            value={{
                navigation,
                setNavigation,
                NAV,
            }}
        >
            { children }
        </NavigationContext.Provider>
    )
}

export const useNavigation = () => {
    const context = useContext(NavigationContext)
    return context
}