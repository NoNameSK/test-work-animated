import { ReactNode } from 'react';

import { Like } from '../svgs/like';
import { Crown } from '../svgs/crown';
import { NodeSVG } from '../svgs/node';

export const aboutItems: {
  svg: ReactNode;
  text: string;
}[] = [
  {
    svg: <Crown />,
    text: 'Предлагаем самые высокие цены',
  },
  {
    svg: <Like />,
    text: 'Выкупаем машины в любом состоянии',
  },
  {
    svg: <NodeSVG />,
    text: 'Оформляем документы прямо на месте',
  },
];
