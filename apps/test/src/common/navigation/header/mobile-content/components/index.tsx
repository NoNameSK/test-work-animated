import { FC } from 'react';
import { Phone } from '@test-work/ui-kit';

export const MobileContent: FC = () => {
  return (
    <div className="px-[17px] py-[12px] flex flex-col gap-[10px]">
      <div className="font-roboto font-bold text-white text-[14px] leading-[16px]">
        Покупка авто по одному звонку!
      </div>
      <div className="flex gap-[10px]">
        <Phone />
        <div className="font-roboto font-bold text-white text-[16px] leading-[19px]">
          +372 5858 0808
        </div>
      </div>
    </div>
  );
};
