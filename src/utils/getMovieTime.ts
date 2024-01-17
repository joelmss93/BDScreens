export function getMovieTime(time: number): string {
  const hours = Math.floor(time / 60)
  const minutes = time - hours * 60

  const result = `${hours && hours + 'h '}${minutes}m`

  return result
}
