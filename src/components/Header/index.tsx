import React, { useContext } from 'react'

import { ActionsContainer, Container, LinksContainer, PageLink } from './styles'
import logo from '../../assets/logo.svg'
import { FilmStrip, House, TelevisionSimple } from 'phosphor-react'
import { Button } from '../Button'
import { useLocation, Link } from 'react-router-dom'
import { Search } from '../Search'
import { SearchContext } from '../../contexts/search'

export const Header: React.FC = () => {
  const { pathname } = useLocation()
  const { handleSearch, query } = useContext(SearchContext)

  return (
    <Container>
      <LinksContainer>
        <img src={logo} alt="logo" width="170" height="44" />
        <div>
          <Link to="/">
            <PageLink active={pathname === '/'}>
              <House />
              <p>Home</p>
            </PageLink>
          </Link>
          <PageLink
            active={pathname.includes('/movies') || pathname.includes('/movie')}
          >
            <FilmStrip />
            <p>Movies</p>
          </PageLink>
          <PageLink active={pathname.includes('/series')}>
            <TelevisionSimple />
            <p>Series</p>
          </PageLink>
        </div>
      </LinksContainer>
      <ActionsContainer>
        <Search
          value={query}
          onChange={(event) => handleSearch(event.target.value)}
          data-testid="search-movies-input"
        />
        <Button text="Sign In" />
      </ActionsContainer>
    </Container>
  )
}
