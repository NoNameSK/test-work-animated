import { css } from 'styled-components';

const Primary = css`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 18px;

  background-color: #fff;

  :hover,
  :active {
    opacity: 0.9;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 22px;
  }
`;

const Secondary = css`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 16px;

  background-color: ${({ theme }) => theme.colors.black};

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  :active {
    opacity: 0.9;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 18px;
  }
`;

const Disabled = css`
  color: ${({ theme }) => theme.colors.textWhite};

  background-color: ${({ theme }) => theme.colors.gray};

  :hover,
  :active {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  cursor: not-allowed;
`;

export const Styles = { Primary, Secondary, Disabled };
