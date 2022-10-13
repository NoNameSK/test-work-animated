import { ReactNode } from 'react';
import { Fast } from '../svgs/fast';
import { Quality } from '../svgs/quality';
import { Reliable } from '../svgs/reliable';

export const companyItems: {
  svg: ReactNode;
  text: string;
}[] = [
  {
    svg: <Fast />,
    text: 'Быстро',
  },
  {
    svg: <Quality />,
    text: 'Качественно',
  },
  {
    svg: <Reliable />,
    text: 'Надежно',
  },
];
