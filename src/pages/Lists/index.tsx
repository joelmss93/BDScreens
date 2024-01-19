import React, { RefObject, useEffect, useRef, useState } from 'react'

import { Container, MovieList } from './styles'
import { useLocation, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import api from '../../service/api'
import { MoviesData, Movie } from '../../types'
import { ErrorMessage } from '../../components/Error'
import { Loading } from '../../components/Loading'
import { Movie as MovieComponent } from '../../components/Movie'

export const Lists: React.FC = () => {
  const { prefix, sortBy } = useParams()
  const { pathname } = useLocation()
  const queryStart = pathname.includes('/movies') ? 'movie' : 'tv'
  const containerRef: RefObject<HTMLDivElement> = useRef(null)

  const [page, setPage] = useState(1)
  const [movieList, setMovieList] = useState<Movie[]>()

  console.log(queryStart)

  const {
    // data: listData,
    isLoading,
    // isFetching,
    isError,
  } = useQuery(
    ['lists', queryStart, sortBy, page],
    async () => {
      const { data } = await api.get<MoviesData>(`/discover/${queryStart}`, {
        params: {
          sort_by: sortBy,
          page,
          language: 'en-US',
        },
      })

      return data
    },
    {
      onSuccess: (data) =>
        movieList
          ? setMovieList((oldData) => oldData && [...oldData, ...data.results])
          : setMovieList(data.results),
      staleTime: 1000 * 60 * 5,
      enabled: !!queryStart && !!sortBy && !!page,
    },
  )

  // useEffect(() => {
  //   if (movieList?.length && listData) {
  //     setMovieList((oldData) => oldData && [...oldData, ...listData.results])
  //   } else if (!movieList?.length && listData) {
  //     setMovieList(listData.results)
  //   }
  // }, [listData, movieList?.length])

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight * 0.8) {
        setPage((prevPage) => prevPage + 1)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container ref={containerRef}>
      <MovieList>
        <h4>{prefix && prefix.replaceAll('-', ' ')}</h4>
        <div>
          {isError ? (
            <ErrorMessage
              message="Something went wrong, please refresh the page"
              className="error-message"
            />
          ) : isLoading && !movieList ? (
            <>
              {Array.from({ length: 20 }).map((_, index) => (
                <Loading
                  key={`loading-${index + 1}`}
                  style={{ width: 214, height: 290, borderRadius: 3 }}
                />
              ))}
            </>
          ) : (
            movieList &&
            movieList.map((movie) => (
              <MovieComponent
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
              />
            ))
          )}
        </div>
      </MovieList>
    </Container>
  )
}
