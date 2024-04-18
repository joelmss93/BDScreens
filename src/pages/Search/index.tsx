import React, { RefObject, useContext, useRef } from 'react'

import { Container } from './styles'
import { SearchContext } from '../../contexts/search'
import { MovieList } from '../Lists/styles'
import { Movie as MovieComponent } from '../../components/Movie'

export const Search: React.FC = () => {
  const { query, moviesSearched, seriesSearched } = useContext(SearchContext)
  const containerRef: RefObject<HTMLDivElement> = useRef(null)

  return (
    <Container ref={containerRef}>
      <MovieList>
        <h4>{`Search results for "${query}" on movies:`}</h4>
        <div>
          {moviesSearched &&
            moviesSearched.results.map((movie) => (
              <MovieComponent
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                type="movie"
              />
            ))}
        </div>
      </MovieList>
      <MovieList>
        <h4>{`Search results for "${query}" on series:`}</h4>
        <div>
          {seriesSearched &&
            seriesSearched.results.map((series) => (
              <MovieComponent
                key={series.id}
                id={series.id}
                title={series.name}
                imageUrl={series.poster_path}
                type="tv"
              />
            ))}
        </div>
      </MovieList>
    </Container>
  )
}
