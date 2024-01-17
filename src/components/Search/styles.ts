import styled from 'styled-components'

interface ContainerProps {
  focused: boolean
}

export const Container = styled.div<ContainerProps>`
  background: ${({ focused, theme }) =>
    focused ? theme.colors.white : 'transparent'};
  border-radius: 8px;
  transition: all 1s;
  z-index: 3;

  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  svg {
    color: ${({ focused, theme }) =>
      focused ? theme.colors.gray2 : theme.colors.white};
    width: 24px;
    height: 24px;
    cursor: ${({ focused }) => !focused && 'pointer'};
  }

  input {
    width: ${({ focused }) => (focused ? '200px' : '0')};
    transition: width 0.5s;
    border: 0;
    outline: 0;

    font-size: 18px;
  }
`

export const SearchOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`
