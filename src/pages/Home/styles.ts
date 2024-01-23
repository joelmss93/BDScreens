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

export const MovieList = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px;

  h4 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.448px;
    text-transform: capitalize;
  }

  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  > div:last-child {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start !important;
    gap: 16px;
    max-width: 94vw;
    height: 315px;
    justify-content: center;
    overflow-x: auto;
    overflow-y: hidden;
  }

  ::-webkit-scrollbar {
    display: none !important;
  }
`

export const SeeAllButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  transition: all 0.4s ease-in;
  margin-right: 8px;

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

interface MovieProps {
  imageUrl: string
}

export const Movie = styled.div<MovieProps>`
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
  cursor: pointer;

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

  &:hover {
    transform: translateY(-15px);
  }
`
