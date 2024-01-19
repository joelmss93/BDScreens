import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 90px;
  scroll-behavior: smooth;

  padding: 0 70px;
`

interface MovieBackdropProps {
  imageUrl: string
}

export const MovieBackdrop = styled.div<MovieBackdropProps>`
  background: url(${({ imageUrl }) => imageUrl});
  border-radius: 3px;
  width: 1312px;
  height: 730px;

  > div {
    background: linear-gradient(0deg, #0a070b 0%, rgba(10, 7, 11, 0) 100%);
    width: 100%;
    height: 100%;
  }
`

export const MovieInfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 50px;

  margin-top: 40px;
  width: 1312px;

  > div {
    display: flex;
    flex-direction: column;

    h5 {
      font-size: 38px;
      font-style: normal;
      font-weight: 600;
      line-height: 48px;
      letter-spacing: -0.57px;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.white};
    }

    span {
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.white};
      margin-top: 24px;
    }

    h4 {
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 18px;
      margin-top: 50px;
    }

    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.gray1};
    }
  }
`

interface AverageProps {
  average: number
}

export const Average = styled.div<AverageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: ${({ theme, average }) =>
    average > 7
      ? theme.colors.green
      : average > 5
        ? theme.colors.yellow
        : theme.colors.primary};

  p {
  }

  span {
  }
`
