import axios from 'axios'

export const newsApi = async (query='software') => {
    const apiKey = '183daca270264bad86fc5b72972fb82a' // for a prod app, would have this in secrets
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`

    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch (e) {
        console.error('failed to get news from api call', e)
    }
}