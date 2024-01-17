import React from 'react'

import popcornSad from '../../assets/popcorn-sad.png'
import { Container } from './styles'

interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  message?: string
}

export const ErrorMessage: React.FC<ErrorProps> = ({
  title,
  message,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <img src={popcornSad} alt="error" />
      <div>
        {title && <h6>{title}</h6>}
        {message && <p>{message}</p>}
      </div>
    </Container>
  )
}
