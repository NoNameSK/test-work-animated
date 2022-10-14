import React, { FC } from 'react';

import { Headline } from '@test-work/ui-kit';

import { Phone } from '../../svgs/phone';
import { Mail } from '../../svgs/mail';

export const Contacts: FC = () => {
  return (
    <div className="mt-[30px] flex flex-col justify-center items-center lg:mt-0 lg:justify-start">
      <Headline level={1} color={'white'}>
        Свяжись с нами
      </Headline>

      <div className="flex flex-col justify-center items-center gap-3 mt-[18px]">
        <div className="flex gap-[14px]">
          <Phone color={'#9CC634'} />

          <div className="font-arimo font-bold text-white text-[16px] leading-[19px]">
            +372 475685
          </div>
        </div>
        <div className="flex gap-[14px]">
          <Mail color={'#9CC634'} />

          <div className="font-arimo font-bold text-white text-[16px] leading-[19px]">
            info@example.ee
          </div>
        </div>
      </div>
    </div>
  );
};
