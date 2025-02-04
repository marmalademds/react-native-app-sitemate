import { newsApi } from "../services";
import { useState, useEffect, useContext, createContext } from 'react'

const NewsContext = createContext()

export const NewsProvider = ({children}) => {
    const [query, setQuery] = useState('')
    const [news, setNews] = useState([])
    const [newsIsLoading, setNewsIsLoading] = useState(false)
    const [triggerNews, setTriggerNews] = useState(false)

    const getNews = async () => {
        setNewsIsLoading(true)
        const newsResponse = await newsApi(query)
        setNews(newsResponse)
        setNewsIsLoading(false)
        setTriggerNews(false)
    }

    useEffect(() => {
        const runAsync = async () => {
            await getNews()
        }
        if (triggerNews) {
            runAsync()
        }
    }, [triggerNews])

    return (
        <NewsContext.Provider
            value = {{
                query,
                setQuery,
                news,
                newsIsLoading,
                setTriggerNews,
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export const useNews = () => {
    const context = useContext(NewsContext)
    return context
}

