import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-weight: 400;
  font-size: 44px;
  line-height: 108%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 64px;
    line-height: 104%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 74px;
    line-height: 104%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 100px;
  }
`;

export const First: FC = (props) => <Wrapper {...props} />;
