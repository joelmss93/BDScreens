import dark from './styles/theme/dark'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import GlobalStyles from './styles/global'
import { queryClient } from './service/queryClient'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
