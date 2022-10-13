import { ReactNode } from 'react';

import { Home } from '../svgs/home';
import { People } from '../svgs/people';
import { Proposal } from '../svgs/proposal';
import { BSV } from '../svgs/bsv';
import { Blog } from '../svgs/blog';
import { Contacts } from '../svgs/contacts';

export const menuItems: {
  svg: ReactNode;
  title: string;
  link: string;
  active?: boolean;
}[] = [
  {
    svg: <Home />,
    title: 'ГЛАВНАЯ',
    link: '',
    active: true,
  },
  {
    svg: <People />,
    title: 'О НАС',
    link: '',
  },
  {
    svg: <Proposal />,
    title: 'ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ',
    link: '',
  },
  {
    svg: <BSV />,
    title: 'ЧЗВ',
    link: '',
  },
  {
    svg: <Blog />,
    title: 'БЛОГ',
    link: '',
  },
  {
    svg: <Contacts />,
    title: 'КОНТАКТЫ',
    link: '',
  },
];
