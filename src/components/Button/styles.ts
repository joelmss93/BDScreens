import styled from 'styled-components'

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.primary};

  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s ease-in-out;

  :hover {
    filter: brightness(-0.5) saturate(50%);
  }
`
