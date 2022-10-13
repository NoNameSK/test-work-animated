import React, { FC, useState } from 'react';

import { NavigationMenu } from './mobile-content/svgs/navigation-menu';

import { NavigationMenuBurger } from './mobile-content/navigation-menu/components';
import { MobileContent } from './mobile-content/components';

export const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleMenuVisibility = () => {
    setIsOpened(!isOpened);
  };

  return (
    <header className="w-full overflow-x-hidden">
      <div className="h-[69px] bg-[#9CC634] rounded-bl-[10px]">
        <MobileContent />
      </div>

      <div className="absolute w-[38%] h-[71px] bg-navigation rounded-bl-[293.5px] right-0 top-0">
        <div
          onClick={() => toggleMenuVisibility()}
          className="absolute h-[33px] w-[33px] right-[15px] top-[19px] z-50"
        >
          <NavigationMenu />
        </div>
      </div>

      <NavigationMenuBurger isOpened={isOpened} />
    </header>
  );
};
