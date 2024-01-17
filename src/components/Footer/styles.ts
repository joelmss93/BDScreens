import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 64px;
  padding: 130px 0;

  width: 100%;
  border-top: 5px solid ${({ theme }) => theme.colors.gray2};
  margin-top: 64px;

  > div:first-child {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    gap: 24px;

    p {
      border-right: 1px solid ${({ theme }) => theme.colors.gray2};
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      height: 18px;
      padding-right: 56px;
      padding-left: 36px;
    }

    p:first-child {
      padding-left: 0;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 67px;

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`

export const SocialMediaContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray1};
    border-right: 1px solid ${({ theme }) => theme.colors.gray2};
    height: 18px;
    max-width: 160px;
    padding-right: 56px;
  }

  > div {
    display: flex;
    gap: 32px;
    margin-left: 114px;
    padding-top: 45px;
    svg {
      width: 32px;
      height: 32px;
    }
  }
`
