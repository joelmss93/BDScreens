import React from 'react'
import { StyledButton } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: React.ReactElement
}

export const Button: React.FC<ButtonProps> = ({ text, icon, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {icon}
      <p>{text}</p>
    </StyledButton>
  )
}
