import { newsApi } from "../services";
import { useState, useEffect, useContext, createContext } from 'react'

const NewsContext = createContext()

export const NewsProvider = ({children}) => {
    const [news, setNews] = useState([])
    const [newsIsLoading, setNewsIsLoading] = useState(false)

    const getNews = async () => {
        setNewsIsLoading(true)
        const newsResponse = await newsApi()
        setNews(newsResponse)
        setNewsIsLoading(false)
    }

    useEffect(() => {
        const runAsync = async () => {
            await getNews()
        }
        runAsync()
    }, [])

    return (
        <NewsContext.Provider
            value = {{
                news,
                newsIsLoading
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

