import React, { FC, useState } from 'react';

import { NavigationMenu } from './mobile-content/svgs/navigation-menu';

import { NavigationMenuBurger } from './mobile-content/navigation-menu/components';

import { MobileContent } from './mobile-content/components';
import { DesktopContent } from './desktop-content/components';

import { DesktopNavigation } from './desktop-content/components/navigation';
import { DesktopIcons } from './desktop-content/components/desktop-icons';

export const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleMenuVisibility = () => {
    setIsOpened(!isOpened);
  };

  return (
    <header className="w-full overflow-x-hidden">
      <div className="h-[69px] bg-[#9CC634] rounded-bl-[10px] lg:h-[70px]">
        <MobileContent />
        <DesktopContent />
      </div>

      <div className="absolute w-[38%] h-[71px] bg-navigation rounded-bl-[293.5px] right-0 top-0 lg:w-[72%] lg:h-[94px] lg:rounded-bl-[270px] lg:flex lg:flex-col lg:">
        <div className="pl-[134px]">
          <DesktopIcons />
          <DesktopNavigation />
        </div>
        <div
          onClick={() => toggleMenuVisibility()}
          className="absolute h-[33px] w-[33px] right-[15px] top-[19px] z-50 lg:hidden"
        >
          <NavigationMenu />
        </div>
      </div>

      <NavigationMenuBurger isOpened={isOpened} />
    </header>
  );
};
