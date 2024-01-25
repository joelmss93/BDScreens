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

  position: relative;
`

export const MovieInfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 50px;
  z-index: 1;

  /* margin-top: 40px; */
  margin-top: -330px;
  width: 1312px;
  padding: 16px;

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
      width: 40vw;
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
  flex-direction: column;
  gap: 8px;
  padding: 4px 8px;

  width: 120px !important;
  height: 100px !important;
  /* border-radius: 50%; */
  border-radius: 16px;

  z-index: 1;

  position: absolute;
  top: 16px;
  right: 16px;

  border: 2px solid
    ${({ theme, average }) =>
      average > 7
        ? theme.colors.green
        : average > 5
          ? theme.colors.yellow
          : theme.colors.primary} !important;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    display: flex;
    /* align-items: center; */
    gap: 8px;
  }

  svg {
    color: ${({ theme, average }) =>
      average > 7
        ? theme.colors.green
        : average > 5
          ? theme.colors.yellow
          : theme.colors.primary};
  }

  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray1};
  }
`

export const CastList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 32px;
  justify-content: center;
  margin-top: 24px;

  h4 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.448px;
    text-transform: capitalize;
    margin-left: 16px;
  }

  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1392px;
  }

  > div:last-child {
    display: flex;
    gap: 16px;
    width: 1392px;

    flex-wrap: wrap;
    justify-content: center;
  }
`

interface ContainerProps {
  imageUrl: string
}

export const Artist = styled.div<ContainerProps>`
  position: relative;
  width: 214px;
  height: 290px;
  flex-shrink: 0;
  border-radius: 3px;
  background: url(${({ imageUrl }) => imageUrl});
  background-size: 100%;

  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease-in-out;

  > div {
    width: 214px;
    height: 88px;
    flex-shrink: 0;
    opacity: 0.75;
    background: linear-gradient(0deg, #0a070b 0%, rgba(10, 7, 11, 0) 100%);
    padding: 4px;

    mix-blend-mode: multiply;
  }

  p {
    position: absolute;
    bottom: 16px;
    left: 12px;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    opacity: 1;
  }

  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    opacity: 1;
  }

  &:hover {
    transform: translateY(-15px);
  }
`
