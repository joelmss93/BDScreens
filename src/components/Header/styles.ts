import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 70px;
  background: linear-gradient(0deg, #0a070b 0%, rgba(10, 7, 11, 0) 100%);
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;

  > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`

interface PageLinkProps {
  active: boolean
}

export const PageLink = styled.div<PageLinkProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3 ease-in-out;

  svg {
    width: 22px;
    height: 22px;
  }

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }

  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.gray1};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;

  svg {
    color: ${({ theme }) => theme.colors.white};
    width: 24px;
    height: 24px;
  }
`
