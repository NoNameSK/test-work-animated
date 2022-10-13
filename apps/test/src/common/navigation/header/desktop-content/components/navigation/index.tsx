import { FC } from 'react';

import { menuItems } from '../../../data/menu-items';

import { FadeIn } from '@test-work/ui-kit';

import { Russian } from '../../../mobile-content/svgs/language/russian';

export const DesktopNavigation: FC = () => {
  return (
    <div className="flex gap-[23px] hidden lg:flex">
      {menuItems.map((item, index) => (
        <FadeIn delay={0.6 + index / 2} key={index}>
          <p className="font-roboto text-[12px] leading-[14px] text-white font-bold">
            {item.title}
          </p>
          {item.active ? (
            <div className="border-b-[3px] border-[#9CC634] mt-[11px] w-auto" />
          ) : null}
        </FadeIn>
      ))}

      <FadeIn delay={1.2}>
        <Russian className="w-[18px] h-[12px]" />
      </FadeIn>
    </div>
  );
};
