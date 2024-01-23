import React from 'react'
import { ThemeProvider } from 'styled-components'
import dark from '../styles/theme/dark'
import { queryClient } from '../service/queryClient'
import { QueryClientProvider } from 'react-query'

export const ReactTestEnvironment: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={dark}>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
