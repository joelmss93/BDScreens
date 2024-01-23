import '@testing-library/jest-dom'
import { queryClient } from './service/queryClient'

beforeEach(() => {
  queryClient.clear()
})
