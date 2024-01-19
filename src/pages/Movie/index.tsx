import React from 'react'

import { Container, MovieBackdrop, MovieInfoContainer } from './styles'
import { useQuery } from 'react-query'
import api from '../../service/api'
import { Movie } from '../../types'
import { getMovieBackdrop } from '../../utils/getMovieImage'
import { getMovieTime } from '../../utils/getMovieTime'
import { useParams } from 'react-router-dom'

export const MovieInfo: React.FC = () => {
  const { id } = useParams()

  const {
    data: movieData,
    isLoading,
    isFetching,
    isError,
  } = useQuery<Movie | undefined>(
    ['movie', id],
    async () => {
      const { data } = await api.get<Movie>(`/movie/${id}`)

      return data
    },
    {
      staleTime: 1000 * 60 * 5,
    },
  )

  return (
    <Container>
      <MovieBackdrop imageUrl={getMovieBackdrop(`${movieData?.backdrop_path}`)}>
        <div />
      </MovieBackdrop>
      {movieData && (
        <MovieInfoContainer>
          <div>
            <h5>{movieData?.title}</h5>
            <span>{getMovieTime(movieData?.runtime)}</span>
            <p>
              {movieData.genres.map(
                (genre, index) =>
                  `${genre.name}${
                    index + 1 < movieData.genres.length ? ', ' : '.'
                  }`,
              )}
            </p>
            <h4>Description</h4>
            <p>{movieData?.overview}</p>
          </div>
        </MovieInfoContainer>
      )}
    </Container>
  )
}
