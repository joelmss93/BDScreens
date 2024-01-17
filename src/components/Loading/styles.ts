import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
`

export const Container = styled.div`
  animation: ${shimmer} 1.2s ease-in-out infinite;

  display: flex;
  align-items: center;
  justify-content: center;

  /* width: 100%;
  height: 100%; */

  background-size: 400%, 400%;
  background-image: linear-gradient(
    -45deg,
    #0a070b 0%,
    #807e81 50%,
    #0a070b 100%
  );
`
