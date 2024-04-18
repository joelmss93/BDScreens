import React from 'react'

import { Container } from './styles'
import { getMovieImage } from '../../utils/getMovieImage'
import { useNavigate } from 'react-router-dom'

interface MovieProps {
  id: number
  imageUrl: string
  title: string
  type: 'movie' | 'tv'
}

export const Movie: React.FC<MovieProps> = ({
  id,
  title,
  imageUrl,
  type,
  ...rest
}) => {
  const navigate = useNavigate()

  const handleSelectTitle = (movieId: number) => {
    navigate(`/${type === 'movie' ? 'movies' : 'series'}/${movieId}`)
  }

  return (
    <Container
      onClick={() => handleSelectTitle(id)}
      imageUrl={getMovieImage(imageUrl)}
      {...rest}
    >
      <div />
      <p>{title}</p>
    </Container>
  )
}
