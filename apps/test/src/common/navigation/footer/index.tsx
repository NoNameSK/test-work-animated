import React, { FC } from 'react';

import { MobileFooter } from './components/mobile-footer';
import { DesktopFooter } from './components/desktop-footer';

export const Footer: FC = () => {
  return (
    <>
      <MobileFooter />
      <DesktopFooter />
    </>
  );
};
