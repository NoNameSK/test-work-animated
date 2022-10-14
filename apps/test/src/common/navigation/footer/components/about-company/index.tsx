import React, { FC } from 'react';
import { Headline } from '@test-work/ui-kit';

export const AboutCompany: FC = () => {
  return (
    <div className="mt-[20px] flex flex-col justify-center items-center lg:mt-0 lg:justify-start">
      <Headline level={1} color={'white'}>
        Company name
      </Headline>

      <div className="flex flex-col justify-center items-center gap-[11px] mt-[18px]">
        <div className="font-arimo font-normal text-white text-[16px] leading-[18px]">
          Reg. nr: 437568
        </div>
        <div className="font-arimo font-normal text-white text-[16px] leading-[18px] text-center">
          Peterburi tee 710 <br /> Tallinn Harjumaa 34235
        </div>
      </div>
    </div>
  );
};
