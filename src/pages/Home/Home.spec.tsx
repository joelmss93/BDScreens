import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { Home } from '.'
import { ReactTestEnvironment } from '../../__Mocks__/ReactEnvironment'
import api from '../../service/api'
import AxiosMock from 'axios-mock-adapter'
import { Header } from '../../components/Header'
import { SearchContextProvider } from '../../contexts/search'

jest.spyOn(console, 'error')
let mockedPath = ''
const mockedNavigate = (to: string) => (mockedPath = to)
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedNavigate,
  useLocation: () => ({
    pathname: mockedPath,
  }),
}))
jest.mock('../../assets/banner.png', () => '')
jest.mock('../../assets/popcorn-sad.png', () => '')
jest.mock('../../assets/logo.svg', () => '')

const moviesResponse = {
  results: [
    {
      adult: false,
      backdrop_path: '/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg',
      genre_ids: [878, 12, 28],
      id: 123456,
      original_language: 'en',
      original_title: 'The Testers',
      overview: 'An dev making tests with jest & testing library',
      popularity: 3060.999,
      poster_path: '/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg',
      release_date: '2023-11-08',
      title: 'The Testers',
      video: false,
      vote_average: 6.3,
      vote_count: 1091,
    },
  ],
}

describe('Home page tests', () => {
  const apiMock = new AxiosMock(api)
  it('should render the component', () => {
    expect(
      render(
        <ReactTestEnvironment>
          <Home />
        </ReactTestEnvironment>,
      ),
    )
  })

  it('should render the component and get movies on api', async () => {
    apiMock.reset()
    apiMock.onGet('/discover/movie').reply(200, moviesResponse)
    apiMock.onGet('/discover/tv').reply(200, moviesResponse)

    render(
      <ReactTestEnvironment>
        <Home />
      </ReactTestEnvironment>,
    )

    const apiHistory = apiMock.history.get

    await waitFor(() => {
      expect(
        apiHistory.some((request) => request.url === '/discover/movie'),
      ).toBe(true)
      expect(apiHistory.some((request) => request.url === '/discover/tv')).toBe(
        true,
      )
    })
  })

  it('should display loadings when request is running', async () => {
    apiMock.reset()
    apiMock.onGet('/discover/movie').reply(200, moviesResponse)
    apiMock.onGet('/discover/tv').reply(200, moviesResponse)

    const { getByTestId } = render(
      <ReactTestEnvironment>
        <Home />
      </ReactTestEnvironment>,
    )

    await waitFor(() => {
      expect(getByTestId('loading-popular-movies-1'))
      expect(getByTestId('loading-latest-movies-1'))
      expect(getByTestId('loading-popular-series-1'))
    })
  })

  it('should display an error message when request fail', async () => {
    apiMock.reset()
    apiMock.onGet('/discover/movie').reply(400)
    apiMock.onGet('/discover/tv').reply(400)

    const { getByTestId } = render(
      <ReactTestEnvironment>
        <Home />
      </ReactTestEnvironment>,
    )

    await waitFor(
      () => {
        expect(getByTestId('popular-movies-error'))
        expect(getByTestId('latest-movies-error'))
        expect(getByTestId('popular-series-error'))
      },
      {
        timeout: 3000,
      },
    )
  })

  it('should be able to go to a list when click on see all popular movies', async () => {
    apiMock.reset()
    apiMock.onGet('/discover/movie').reply(200, moviesResponse)
    apiMock.onGet('/discover/tv').reply(200, moviesResponse)

    const { getByTestId } = render(
      <ReactTestEnvironment>
        <Home />
      </ReactTestEnvironment>,
    )

    fireEvent.click(getByTestId('see-all-popular-movies'))

    expect(mockedPath).toBe('/movies/list/popular-movies/popularity.desc')
  })

  it('should be able to go to a list when click on see all latest movies', async () => {
    apiMock.reset()
    apiMock.onGet('/discover/movie').reply(200, moviesResponse)
    apiMock.onGet('/discover/tv').reply(200, moviesResponse)

    const { getByTestId } = render(
      <ReactTestEnvironment>
        <Home />
      </ReactTestEnvironment>,
    )

    fireEvent.click(getByTestId('see-all-latest-movies'))

    expect(mockedPath).toBe(
      '/movies/list/latest-movies/primary_release_date.desc',
    )
  })

  it('should be able to go to a list when click on see all popular series', async () => {
    apiMock.reset()
    apiMock.onGet('/discover/movie').reply(200, moviesResponse)
    apiMock.onGet('/discover/tv').reply(200, moviesResponse)

    const { getByTestId } = render(
      <ReactTestEnvironment>
        <Home />
      </ReactTestEnvironment>,
    )

    fireEvent.click(getByTestId('see-all-popular-series'))

    expect(mockedPath).toBe('/series/list/popular-series/popularity.desc')
  })

  it('should be able to search movies', async () => {
    apiMock.reset()
    apiMock.onGet('/search/movie').reply(200, moviesResponse)

    const { getByTestId } = render(
      <ReactTestEnvironment>
        <SearchContextProvider>
          <Header />
          <Home />
        </SearchContextProvider>
      </ReactTestEnvironment>,
    )

    act(() => {
      fireEvent.click(getByTestId('search-clickable'))
      fireEvent.change(getByTestId('search-movies-input'), {
        target: { value: 'test' },
      })
    })

    await waitFor(
      () => {
        expect(getByTestId('movies-searched'))
      },
      {
        timeout: 3000,
      },
    )
  })
})
