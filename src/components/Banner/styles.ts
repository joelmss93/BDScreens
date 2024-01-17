import styled from 'styled-components'
import banner from '../../assets/banner.png'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 69px;
  width: 100%;
  background:
    linear-gradient(
      172deg,
      #000 4.94%,
      rgba(0, 0, 0, 0.35) 45.74%,
      rgba(0, 0, 0, 0.9) 92.94%
    ),
    url(${banner}) center no-repeat;
  background-size: cover;
  margin-bottom: 50px;

  > div {
    display: flex;
    flex: 1;
    max-width: 40%;
    flex-direction: column;
  }

  h1 {
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.45);
    font-size: 65px;
    font-style: normal;
    font-weight: 600;
    line-height: 72px; /* 110.769% */
    letter-spacing: -1.5px;
    margin-bottom: 32px;
  }

  h4 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 24px;
  }

  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`
