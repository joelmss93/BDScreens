export type Movie = {
  id: number
  title: string
  poster_path: string
  backdrop_path: string
  overview: string
  runtime: number
  release_date: string
  genres: {
    id: number
    name: string
  }[]
  vote_average: number
  vote_count: number
}

export interface MoviesData {
  results: Movie[]
  page: number
  total_pages: number
  total_results: number
}

export interface CreditsData {
  id: number
  cast: {
    id: number
    name: string
    profile_path: string
    character: string
  }[]
}

export type Serie = {
  id: number
  name: string
  original_name: string
  overview: string
  first_air_date: string
  vote_average: number
  vote_count: number
  poster_path: string
  backdrop_path: string
  overview: string
  runtime: number
  genres: {
    id: number
    name: string
  }[]
}

export interface SeriesData {
  results: Serie[]
  page: number
  total_pages: number
  total_results: number
}
