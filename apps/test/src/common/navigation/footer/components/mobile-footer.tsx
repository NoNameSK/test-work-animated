import React, { FC } from 'react';

import { Logo } from '@test-work/ui-kit';

import { Contacts } from '../components/contacts';
import { AboutCompany } from '../components/about-company';
import { Links } from '../components/links';
import { Social } from '../components/social';

export const MobileFooter: FC = () => {
  return (
    <footer className="bg-[#0D2444] lg:hidden">
      <div className="flex flex-col pt-[37px] pb-[24px] justify-center items-center">
        <Logo />

        <Contacts />

        <AboutCompany />

        <Links />

        <Social />
      </div>

      <div className="w-full h-[79px] bg-[#020D1A]" />
    </footer>
  );
};
