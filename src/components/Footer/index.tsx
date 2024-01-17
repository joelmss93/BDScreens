import React from 'react'
import logo from '../../assets/logo.svg'

import { Container, LogoContainer, SocialMediaContainer } from './styles'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <p>Feedback</p>
        <p>Help</p>
        <p>FAQ</p>
      </div>
      <LogoContainer>
        <img src={logo} alt="logo" width="237" height="59" />
        <p>©2024 All rights reserved</p>
      </LogoContainer>
      <SocialMediaContainer>
        <p>FOLLOW ON</p>
        <div>
          <FacebookLogo weight="fill" />
          <InstagramLogo weight="fill" />
        </div>
      </SocialMediaContainer>
      <div style={{ width: '155px' }} />
    </Container>
  )
}

export default Footer
