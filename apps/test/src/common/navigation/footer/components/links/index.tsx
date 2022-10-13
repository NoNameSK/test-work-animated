import React, { FC } from 'react';
import { Headline } from '@test-work/ui-kit';

export const Links: FC = () => {
  return (
    <div className="mt-[20px] flex flex-col justify-center items-center">
      <Headline level={1} color={'white'}>
        Полезные ссылки
      </Headline>

      <div className="flex flex-col justify-center items-center gap-3 mt-[18px]">
        <a className="font-arimo font-normal text-white text-[16px] leading-[18px] transition-none">
          О нас
        </a>
        <a className="font-arimo font-normal text-white text-[16px] leading-[18px] text-center transition-none">
          Часто задаваемые вопросы
        </a>
        <a className="font-arimo font-normal text-white text-[16px] leading-[18px] text-center transition-none">
          Контакты
        </a>
      </div>
    </div>
  );
};
