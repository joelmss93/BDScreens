import noImage from '../assets/no-image.png'

export function getMovieImage(path: string): string {
  const imgAPI = 'https://image.tmdb.org/t/p/w1280'

  if (!path) {
    return noImage
  }

  return `${imgAPI}${path}`
}

export function getMovieBackdrop(path: string): string {
  const imageAPI =
    'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/'

  return `${imageAPI}${path}`
}
