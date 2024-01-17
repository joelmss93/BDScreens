import { useState, createContext, useEffect } from 'react'
import api from '../service/api'
import { MoviesData } from '../types'
import { useQuery } from 'react-query'

interface SearchContextProps {
  query: string
  moviesSearched: MoviesData | undefined
  handleSearch(value: string): void
}

export const SearchContext = createContext({} as SearchContextProps)

export const SearchContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('')
  const [searchTimer, setSearchTimer] = useState(2000)

  useEffect(() => {
    searchTimer &&
      setTimeout(() => {
        if (searchTimer > 0) setSearchTimer((oldValue) => oldValue - 1000)
      }, 1000)
  }, [searchTimer])

  const { data: moviesSearched } = useQuery(
    ['movies', 'search', 1, searchValue],
    async () => {
      const { data } = await api.get<MoviesData>('/search/movie', {
        params: { query: searchValue },
      })

      return data
    },
    {
      staleTime: 1000 * 60 * 5,
      enabled: searchTimer === 0,
    },
  )

  const handleSearch = (value: string) => {
    setSearchTimer(2000)
    setSearchValue(value)
  }

  return (
    <SearchContext.Provider
      value={{ query: searchValue, handleSearch, moviesSearched }}
    >
      {children}
    </SearchContext.Provider>
  )
}
