import { FC } from 'react';

import { FadeIn, Phone } from '@test-work/ui-kit';

export const MobileContent: FC = () => {
  return (
    <div className="px-[17px] py-[12px] flex flex-col gap-[10px]">
      <FadeIn delay={0.8}>
        <div className="font-roboto font-bold text-white text-[14px] leading-[16px]">
          Покупка авто по одному звонку!
        </div>
      </FadeIn>

      <div className="flex gap-[10px]">
        <FadeIn delay={1}>
          <Phone />
        </FadeIn>

        <FadeIn delay={1.6}>
          <div className="font-roboto font-bold text-white text-[16px] leading-[19px]">
            +372 5858 0808
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
