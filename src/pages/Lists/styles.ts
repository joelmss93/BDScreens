import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 90px;
  scroll-behavior: smooth;

  .error-message {
    width: 95vw;
  }
`

export const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 32px;
  justify-content: center;

  h4 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.448px;
    text-transform: capitalize;
  }

  > div {
    display: flex;
    gap: 16px;
    max-width: 98vw;
    flex-wrap: wrap;
    justify-content: center;
    /* width: 98vw; */
  }
`
