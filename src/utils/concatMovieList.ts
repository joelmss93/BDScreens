import { Movie } from '../types'

export function concatMovieList(
  currentList: Movie[],
  newMovies: Movie[],
): Movie[] {
  if (currentList.length > 0) {
    const compare = currentList.find((movie) =>
      newMovies.some((newMovie) => movie.id === newMovie.id),
    )

    if (compare) return currentList
    else return currentList.concat(newMovies)
  }

  return newMovies
}
