import React, { useContext } from 'react'

import { Container, Movie, MovieList, SeeAllButton } from './styles'
import { useQuery } from 'react-query'
import api from '../../service/api'
import { MoviesData } from '../../types'
import { SearchContext } from '../../contexts/search'
import Banner from '../../components/Banner'
import { ArrowRight } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { getMovieImage } from '../../utils/getMovieImage'
import { Loading } from '../../components/Loading'
import noImage from '../../assets/no-image.png'
import { ErrorMessage } from '../../components/Error'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  const { query, moviesSearched } = useContext(SearchContext)

  const {
    data: popularVideos,
    isLoading: isPopularVideosLoading,
    isFetching: isPopularVideosFetching,
    isError: isPopularVideosErrored,
  } = useQuery<MoviesData | undefined>(
    ['popular movies', 1],
    async () => {
      const { data } = await api.get<MoviesData>('/discover/movie', {
        params: {
          sort_by: 'popularity.desc',
          page: 1,
          language: 'en-US',
        },
      })

      return data
    },
    {
      staleTime: 1000 * 5 * 10,
    },
  )

  const {
    data: latestMovies,
    isLoading: isLatestMoviesLoading,
    isFetching: isLatestMoviesFetching,
    isError: isLatestMoviesErrored,
  } = useQuery<MoviesData | undefined>(
    ['top rated movies', 1],
    async () => {
      const { data } = await api.get<MoviesData>('/discover/movie', {
        params: {
          sort_by: 'primary_release_date.desc',
          page: 1,
          language: 'en-US',
        },
      })

      return data
    },
    {
      staleTime: 1000 * 5 * 10,
    },
  )

  const {
    data: popularSeries,
    isLoading: isPopularSeriesLoading,
    isFetching: isPopularSeriesFetching,
    isError: isPopularSeriesErrored,
  } = useQuery<MoviesData | undefined>(
    ['latest series', 1],
    async () => {
      const { data } = await api.get<MoviesData>('/discover/tv', {
        params: {
          sort_by: 'popularity.desc',
          page: 1,
          language: 'en-US',
        },
      })

      return data
    },
    {
      staleTime: 1000 * 5 * 10,
    },
  )

  const handleSelectTitle = (id: number) => {
    navigate(`/movie/${id}`)
  }

  return (
    <Container>
      <Banner />
      {query && moviesSearched && (
        <MovieList>
          <div>
            <h4>Your Search Result for: {query}</h4>
            <SeeAllButton>
              <p>See all</p>
              <ArrowRight weight="bold" />
            </SeeAllButton>
          </div>
          <div>
            {moviesSearched &&
              moviesSearched.results
                .filter((_, index) => index < 16)
                .map((movie) => (
                  <Movie
                    key={movie.id}
                    imageUrl={getMovieImage(movie.poster_path)}
                    onClick={() => handleSelectTitle(movie.id)}
                  >
                    <div />
                    <p>{movie.title}</p>
                  </Movie>
                ))}
          </div>
        </MovieList>
      )}
      <MovieList>
        <div>
          <h4>Popular Movies</h4>
          <SeeAllButton>
            <p>See all</p>
            <ArrowRight weight="bold" />
          </SeeAllButton>
        </div>
        <div>
          {isPopularSeriesErrored ? (
            <ErrorMessage
              message="Sorry for that, please refresh the page"
              className="error-message"
            />
          ) : isPopularVideosLoading || isPopularVideosFetching ? (
            <>
              {Array.from({ length: 8 }).map((_, index) => (
                <Loading
                  key={`loading-popular-movies${index + 1}`}
                  style={{ width: 214, height: 290, borderRadius: 3 }}
                />
              ))}
            </>
          ) : (
            popularVideos &&
            popularVideos.results
              .filter((_, index) => index < 8)
              .map((movie) => (
                <Movie
                  key={movie.id}
                  imageUrl={getMovieImage(movie.poster_path)}
                  onClick={() => handleSelectTitle(movie.id)}
                >
                  <div />
                  <p>{movie.title}</p>
                </Movie>
              ))
          )}
        </div>
      </MovieList>

      <MovieList>
        <div>
          <h4>Latest Movies</h4>
          <SeeAllButton>
            <p>See all</p>
            <ArrowRight weight="bold" />
          </SeeAllButton>
        </div>
        <div>
          {isLatestMoviesErrored ? (
            <ErrorMessage
              message="Sorry for that, please refresh the page"
              className="error-message"
            />
          ) : isLatestMoviesLoading || isLatestMoviesFetching ? (
            <>
              {Array.from({ length: 8 }).map((_, index) => (
                <Loading
                  key={`loading-latest-videos-${index + 1}`}
                  style={{ width: 214, height: 290, borderRadius: 3 }}
                />
              ))}
            </>
          ) : (
            latestMovies &&
            latestMovies.results
              .filter((_, index) => index < 8)
              .map((movie) => (
                <Movie
                  key={movie.id}
                  imageUrl={getMovieImage(movie.poster_path)}
                  onClick={() => handleSelectTitle(movie.id)}
                >
                  <div />
                  <p>{movie.title}</p>
                </Movie>
              ))
          )}
        </div>
      </MovieList>

      <MovieList>
        <div>
          <h4>Popular Series</h4>
          <SeeAllButton>
            <p>See all</p>
            <ArrowRight weight="bold" />
          </SeeAllButton>
        </div>
        <div>
          {isPopularSeriesErrored ? (
            <ErrorMessage
              message="Sorry for that, please refresh the page"
              className="error-message"
            />
          ) : isPopularSeriesLoading || isPopularSeriesFetching ? (
            <>
              {Array.from({ length: 8 }).map((_, index) => (
                <Loading
                  key={`loading-latest-videos-${index + 1}`}
                  style={{ width: 214, height: 290, borderRadius: 3 }}
                />
              ))}
            </>
          ) : (
            popularSeries &&
            popularSeries.results
              .filter((_, index) => index < 8)
              .map((movie) => (
                <Movie
                  key={movie.id}
                  imageUrl={getMovieImage(movie.poster_path)}
                  onClick={() => handleSelectTitle(movie.id)}
                >
                  <div />
                  <p>{movie.title}</p>
                </Movie>
              ))
          )}
        </div>
      </MovieList>
    </Container>
  )
}
