import React from 'react'
import { Header } from '../components/Header'
import { SearchContextProvider } from '../contexts/search'
import Footer from '../components/Footer'

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SearchContextProvider>
      <Header />
      {children}
      <Footer />
    </SearchContextProvider>
  )
}
