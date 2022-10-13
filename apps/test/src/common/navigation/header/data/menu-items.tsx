import { ReactNode } from 'react';

import { Home } from '../mobile-content/svgs/home';
import { People } from '../mobile-content/svgs/people';
import { Proposal } from '../mobile-content/svgs/proposal';
import { BSV } from '../mobile-content/svgs//bsv';
import { Blog } from '../mobile-content/svgs/blog';
import { Contacts } from '../mobile-content/svgs/contacts';

export const menuItems: {
  svg: ReactNode;
  title: string;
  link: string;
  active: boolean;
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
    active: false,
  },
  {
    svg: <Proposal />,
    title: 'ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ',
    link: '',
    active: false,
  },
  {
    svg: <BSV />,
    title: 'ЧЗВ',
    link: '',
    active: false,
  },
  {
    svg: <Blog />,
    title: 'БЛОГ',
    link: '',
    active: false,
  },
  {
    svg: <Contacts />,
    title: 'КОНТАКТЫ',
    link: '',
    active: false,
  },
];
