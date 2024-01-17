import React, { useState } from 'react'

import { Container, SearchOverlay } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  value: string
}

export const Search: React.FC<SearchProps> = ({ value, ...rest }) => {
  const [searchFocused, setSearchFocused] = useState(false)

  const handleEnableSearch = () => {
    setSearchFocused(true)
    const input = document.getElementById('search-input')
    if (input) {
      setTimeout(() => {
        input.focus()
      }, 600)
    }
  }

  return (
    <>
      {searchFocused && (
        <SearchOverlay onClick={() => setSearchFocused(false)} />
      )}
      <Container
        onClick={handleEnableSearch}
        focused={searchFocused || !!value}
      >
        <MagnifyingGlass />
        <input value={value} {...rest} id="search-input" />
      </Container>
    </>
  )
}
