import { FC } from 'react';

import { Car } from './svgs/car';

import { Facebook } from '../../../../footer/svgs/social/facebook';
import { Vk } from '../../../../footer/svgs/social/vk';

export const DesktopIcons: FC = () => {
  return (
    <div className="pt-3 pb-[19px] pl-[221px] hidden lg:flex">
      <Car />

      <div className="flex gap-[13px] ml-auto pt-[16px] pr-[25px] items-center">
        <Facebook className="w-[9px] h-[20px]" />

        <Vk className="w-[17px] h-[17px]" />
      </div>
    </div>
  );
};
