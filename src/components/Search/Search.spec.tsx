import { fireEvent, render } from '@testing-library/react'
import { Search } from './index'
import { ReactTestEnvironment } from '../../__Mocks__/ReactEnvironment'
import { SearchContextProvider } from '../../contexts/search'

describe('Search Component Tests', () => {
  it('should render the component', () => {
    expect(generateComponent())
  })

  it('should render search component focused', () => {
    const { getByTestId } = generateComponent()
    fireEvent.click(getByTestId('search-clickable'))
    expect(getByTestId('search-overlay')).toBeInTheDocument()
  })

  it('should be able to type in the input', () => {
    let value = ''
    const changeSpy = jest.fn((event) => {
      value = event.target.value
    })
    const { getByTestId } = generateComponent({
      value,
      onChange: changeSpy,
    })
    fireEvent.click(getByTestId('search-clickable'))

    fireEvent.change(getByTestId('search-input'), {
      target: { value: 'test value' },
    })

    expect(value).toBe('test value')
  })
})

const generateComponent = (
  props?: Partial<{
    placeholder?: string
    value?: string
    onChange: any
  }>,
) => {
  const defaultProps = {
    placeholder: 'Search',
    value: '',
    ...props,
  }

  return render(
    <ReactTestEnvironment>
      <SearchContextProvider>
        <Search {...defaultProps} />
      </SearchContextProvider>
    </ReactTestEnvironment>,
  )
}
