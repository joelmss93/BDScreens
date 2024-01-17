export type Movie = {
  id: number
  title: string
  poster_path: string
  backdrop_path: string
  overview: string
  runtime: number
  genres: {
    id: number
    name: string
  }[]
}

export interface MoviesData {
  results: Movie[]
}
