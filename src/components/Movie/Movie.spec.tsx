import { fireEvent, render } from '@testing-library/react'
import { ReactTestEnvironment } from '../../__Mocks__/ReactEnvironment'
import { Movie } from '.'

jest.spyOn(console, 'error')
let mockedPathName = ''
const mockedNavigate = (path: string) => (mockedPathName = path)
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedNavigate,
}))

describe('Movie Component Tests', () => {
  it('should render the component', () => {
    expect(
      render(
        <ReactTestEnvironment>
          <Movie id={1} title="test" imageUrl="testurl.com" />
        </ReactTestEnvironment>,
      ),
    )
  })

  it('should display movie title', () => {
    const { getByText } = render(
      <ReactTestEnvironment>
        <Movie id={1} title="test" imageUrl="testurl.com" data-testid="movie" />
      </ReactTestEnvironment>,
    )

    expect(getByText('test'))
  })

  it('should be able to navigate to a movie when click on it', () => {
    const { getByTestId } = render(
      <ReactTestEnvironment>
        <Movie id={1} title="test" imageUrl="testurl.com" data-testid="movie" />
      </ReactTestEnvironment>,
    )

    fireEvent.click(getByTestId('movie'))
    expect(mockedPathName).toBe('/movies/1')
  })
})
