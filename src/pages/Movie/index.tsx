import React, { useState } from 'react'

import {
  Artist,
  Average,
  CastList,
  Container,
  MovieBackdrop,
  MovieInfoContainer,
} from './styles'
import { useQuery } from 'react-query'
import api from '../../service/api'
import { CreditsData, Movie } from '../../types'
import { getMovieBackdrop, getMovieImage } from '../../utils/getMovieImage'
import { getMovieTime } from '../../utils/getMovieTime'
import { useParams } from 'react-router-dom'
import { ArrowDown, ArrowUp, Star } from 'phosphor-react'
import { ErrorMessage } from '../../components/Error'
import { Loading } from '../../components/Loading'
import { SeeAllButton } from '../Home/styles'

export const MovieInfo: React.FC = () => {
  const { id } = useParams()

  const [seeAllArtists, setSeeAllArtists] = useState(false)

  const { data: movieData, isLoading: isMovieLoading } = useQuery<
    Movie | undefined
  >(
    ['movie', id],
    async () => {
      const { data } = await api.get<Movie>(`/movie/${id}`)

      return data
    },
    {
      staleTime: 1000 * 60 * 5,
    },
  )

  const {
    data: creditsData,
    isLoading: isCreditsLoading,
    isError: isCreditsErrored,
  } = useQuery(
    ['credits', id],
    async () => {
      const { data } = await api.get<CreditsData>(`/movie/${id}/credits`)

      return data
    },
    {
      staleTime: 1000 * 60 * 5,
    },
  )

  return (
    <Container>
      <MovieBackdrop imageUrl={getMovieBackdrop(`${movieData?.backdrop_path}`)}>
        {movieData && (
          <Average average={movieData.vote_average}>
            <p>Average</p>
            <p>
              <Star size={16} weight="fill" />
              {movieData.vote_average.toFixed(2)}
            </p>
            <span>{movieData.vote_count} votes</span>
          </Average>
        )}

        <div />
      </MovieBackdrop>
      {isMovieLoading ? (
        <MovieInfoContainer>
          <div>
            <h5>
              <Loading style={{ width: '200px', height: '48px' }} />
            </h5>
            <span>
              <Loading style={{ width: '100px', height: '24px' }} />
            </span>
            <p>
              <Loading style={{ width: '150px', height: '20px' }} />
            </p>
            <h4>
              <Loading style={{ width: '200px', height: '24px' }} />
            </h4>
            <p>
              <Loading style={{ width: '200px', height: '40px' }} />
            </p>
          </div>
        </MovieInfoContainer>
      ) : (
        movieData && (
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
        )
      )}

      <CastList>
        <div>
          <h4>Cast</h4>
          <SeeAllButton
            onClick={() => setSeeAllArtists((oldValue) => !oldValue)}
            data-testid="see-all-artists"
          >
            <p>{seeAllArtists ? 'See less' : 'See all'}</p>
            {seeAllArtists ? (
              <ArrowUp weight="bold" />
            ) : (
              <ArrowDown weight="bold" />
            )}
          </SeeAllButton>
        </div>
        <div>
          {isCreditsErrored ? (
            <ErrorMessage
              message="Sorry for that, please refresh the page"
              data-testid="popular-movies-error"
              className="error-message"
            />
          ) : isCreditsLoading ? (
            <>
              {Array.from({ length: 8 }).map((_, index) => (
                <Loading
                  key={`loading-artists-${index + 1}`}
                  data-testid={`loading-artists-${index + 1}`}
                  style={{ width: 214, height: 290, borderRadius: 3 }}
                />
              ))}
            </>
          ) : (
            creditsData &&
            creditsData.cast
              .filter((_, index) => (seeAllArtists ? index < 50 : index < 5))
              .map((artist) => (
                <Artist
                  key={artist.id}
                  imageUrl={getMovieImage(artist.profile_path)}
                >
                  <div />
                  <p>
                    {artist.name}
                    <br />
                    <span>as {artist.character}</span>
                  </p>
                </Artist>
              ))
          )}
        </div>
      </CastList>
    </Container>
  )
}
