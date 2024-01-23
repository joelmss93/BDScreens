import React from 'react'
import { ThemeProvider } from 'styled-components'
import dark from '../styles/theme/dark'
import { queryClient } from '../service/queryClient'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

export const ReactTestEnvironment: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={dark}>{children}</ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
