import React, { FC } from 'react';

import { Logo } from '@test-work/ui-kit';

import { menuItems } from '../../../data/menu-items';

import { Russian } from '../../svgs/language/russian';
import { Facebook } from '../../../../footer/svgs/social/facebook';
import { Vk } from '../../../../footer/svgs/social/vk';

interface IComponentProps {
  isOpened: boolean;
}

export const NavigationMenuBurger: FC<IComponentProps> = ({ isOpened }) => {
  return (
    <div
      className={
        isOpened
          ? 'right-[0px] font-epilogue flex flex-col gap-[54px] top-0 animate-openMenuX animate-openMenuY w-[372px] h-screen absolute  bg-[#072446] pl-[34px] pt-[27px] h-openMenuY z-10'
          : 'animate-closeMenuX animate-closeMenuY top-0 right-[-414px] flex w-screen absolute flex-col gap-[54px] bg-[#072446] pl-[34px] pt-[27px] h-closeMenuY hidden'
      }
    >
      <Logo />

      <ul className="mt-[94px] flex flex-col gap-[54px] pl-0.5">
        {menuItems.map((item) => (
          <a href={item.link} key={item.title}>
            <li className="flex gap-[21px]">
              <div>
                <React.Fragment>{item.svg}</React.Fragment>
              </div>
              <div className="text-[16px] leading-[19px] text-roboto text-white font-black">
                {item.title}
              </div>
            </li>
          </a>
        ))}
      </ul>

      <div className="flex gap-[11px]">
        <Russian />

        <div className="text-[16px] leading-[19px] text-roboto text-white font-black">
          РУССКИЙ
        </div>
      </div>

      <div className="flex gap-[30px]">
        <Facebook />

        <Vk />
      </div>
    </div>
  );
};
