import React, { RefObject, useEffect, useRef } from 'react'

import { Container, MovieList } from './styles'
import { useLocation, useParams } from 'react-router-dom'
import { useInfiniteQuery } from 'react-query'
import api from '../../service/api'
import { MoviesData } from '../../types'
import { ErrorMessage } from '../../components/Error'
import { Loading } from '../../components/Loading'
import { Movie as MovieComponent } from '../../components/Movie'

export const Lists: React.FC = () => {
  const { prefix, sortBy } = useParams()
  const { pathname } = useLocation()
  const category = pathname.includes('/movies') ? 'movie' : 'tv'
  const containerRef: RefObject<HTMLDivElement> = useRef(null)

  const {
    data: moviesList,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['lists', category, sortBy],
    async ({ pageParam = 1 }) => {
      const { data } = await api.get<MoviesData>(`/discover/${category}`, {
        params: {
          sort_by: sortBy,
          page: pageParam,
          language: 'en-US',
        },
      })

      return data
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1
        else return undefined
      },
      staleTime: 1000 * 60 * 5,
      enabled: !!category && !!sortBy,
    },
  )

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight * 0.8) fetchNextPage()
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
          {isError && !moviesList ? (
            <ErrorMessage
              message="Something went wrong, please refresh the page"
              className="error-message"
            />
          ) : isLoading && !moviesList ? (
            <>
              {Array.from({ length: 20 }).map((_, index) => (
                <Loading
                  key={`loading-${index + 1}`}
                  style={{ width: 214, height: 290, borderRadius: 3 }}
                />
              ))}
            </>
          ) : (
            moviesList &&
            moviesList.pages.flatMap((data) =>
              data.results.map((movie) => (
                <MovieComponent
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  imageUrl={movie.poster_path}
                />
              )),
            )
          )}

          {isFetchingNextPage &&
            Array.from({ length: 6 }).map((_, index) => (
              <Loading
                key={`loading-fetch-${index + 1}`}
                style={{ width: 214, height: 290, borderRadius: 3 }}
              />
            ))}

          {isError && moviesList && (
            <ErrorMessage
              message="Something went wrong, please refresh the page"
              className="error-message"
            />
          )}
        </div>
      </MovieList>
    </Container>
  )
}
