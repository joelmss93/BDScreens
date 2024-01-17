import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      blue: string
      green: string
      yellow: string

      background: string
      gray1: string
      gray2: string
      white: string
    }
  }
}
