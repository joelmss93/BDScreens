import styled from 'styled-components'

interface ContainerProps {
  imageUrl: string
}

export const Container = styled.div<ContainerProps>`
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
