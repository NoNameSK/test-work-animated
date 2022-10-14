import React, { FC } from 'react';

import { Headline, Logo } from '@test-work/ui-kit';

import { Contacts } from '../components/contacts';
import { Links } from '../components/links';
import { Phone } from '../svgs/phone';
import { Mail } from '../svgs/mail';

export const DesktopFooter: FC = () => {
  return (
    <footer className="bg-[#0D2444] hidden lg:block">
      <div className="flex pt-[35px] pb-[24px] pl-[84px] pr-[79px] justify-between">
        <Logo className="mt-[15px]" />

        <div className="flex flex-col items-start justify-start gap-[9px]">
          <Headline level={2} color={'white'}>
            Company name
          </Headline>

          <div>
            <div className="pb-1">
              <Headline level={2} color={'white'} isNormal>
                Reg. nr: 437568
              </Headline>
            </div>

            <Headline level={2} color={'white'} isNormal>
              Peterburi tee 710
            </Headline>

            <Headline level={2} color={'white'} isNormal>
              Tallinn Harjumaa 34235
            </Headline>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] items-start justify-start">
          <Headline level={2} color={'white'}>
            Свяжись с нами
          </Headline>

          <div className="flex flex-col justify-start items-start gap-[7px]">
            <div className="flex gap-[7px] items-center">
              <Phone size="13" color={'#9CC634'} />

              <Headline level={2} color={'white'}>
                +372 475685
              </Headline>
            </div>
            <div className="flex gap-[7px] items-center">
              <Mail width="15" height="13" color={'#9CC634'} />

              <Headline level={2} color={'white'}>
                info@example.ee
              </Headline>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start">
          <Headline level={2} color={'white'}>
            Полезные ссылки
          </Headline>

          <div className="flex flex-col gap-[7px] mt-[10px]">
            <a>
              <Headline level={2} color={'white'} isNormal>
                О нас
              </Headline>
            </a>
            <a>
              <Headline level={2} color={'white'} isNormal>
                Часто задаваемые вопросы
              </Headline>
            </a>
            <a>
              <Headline level={2} color={'white'} isNormal>
                Контакты
              </Headline>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[56px] bg-[#020D1A]" />
    </footer>
  );
};
