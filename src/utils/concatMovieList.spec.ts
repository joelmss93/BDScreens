import '@testing-library/jest-dom'
import { concatMovieList } from './concatMovieList'
// import { Movie } from '../types'

const newMovies = [
  {
    id: 111,
    overview: 'Test description 1',
    poster_path: '/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
    backdrop_path: '/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
    release_date: '2023-11-08',
    title: 'The great test',
    genres: [],
    runtime: 180,
  },
]
const movies2 = [
  {
    id: 222,
    overview: 'Test description 2',
    poster_path: '/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
    backdrop_path: '/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
    release_date: '2023-11-08',
    title: 'The poor test',
    genres: [],
    runtime: 180,
  },
]

describe('Concat Movie List', () => {
  it('should be able to concat an empty list with movies list', () => {
    const movieList = concatMovieList([], newMovies)

    expect(movieList).toEqual(newMovies)
  })

  it('should be able to concat an list with other list', () => {
    const movieList = concatMovieList(newMovies, movies2)

    expect(movieList).toEqual([...newMovies, ...movies2])
  })

  it('should concat multiple lists, but without repeat items', () => {
    expect(concatMovieList(newMovies, newMovies)).toEqual(newMovies)
  })
})
