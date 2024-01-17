import React from 'react'

import { Container } from './styles'

export const Loading: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => {
  return <Container {...rest} />
}
