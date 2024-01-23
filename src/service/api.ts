import axios from 'axios'

// const apiKey = import.meta.env.VITE_MOVIE_API_KEY
const apiKey = process.env.VITE_MOVIE_API_KEY

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: apiKey,
  },
})

export default api
