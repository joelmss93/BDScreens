import '@testing-library/jest-dom'

import { getMovieImage, getMovieBackdrop } from './getMovieImage'
import noImage from '../assets/no-image.png'

describe('Get Movie Image Utility', () => {
  it('should return the full image URL when a valid path is provided', () => {
    const path = '/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg'
    const expectedURL =
      'https://image.tmdb.org/t/p/w1280/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg'
    expect(getMovieImage(path)).toBe(expectedURL)
  })

  it('should return the no-image placeholder when an empty path is provided', () => {
    const path = ''
    expect(getMovieImage(path)).toBe(noImage)
  })
})

describe('Get Movie Backdrop Utility', () => {
  it('should return the full backdrop URL when a valid path is provided', () => {
    const path = '9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg'
    const expectedURL =
      'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg'
    expect(getMovieBackdrop(path)).toBe(expectedURL)
  })
})
