import { FC } from 'react';

import { FadeIn, Headline, Mail, Phone } from '@test-work/ui-kit';

export const DesktopContent: FC = () => {
  return (
    <div className="px-[84px] py-[16px] hidden flex-col gap-[10px] lg:flex">
      <div className="flex gap-[16px] items-center">
        <FadeIn delay={1}>
          <Phone className="w-[13px] h-[13px]" />
        </FadeIn>

        <FadeIn delay={1.6}>
          <Headline level={2} color={'white'}>
            +372 5858 0808
          </Headline>
        </FadeIn>
      </div>

      <div className="flex gap-[16px] items-center">
        <FadeIn delay={1}>
          <Mail className="w-[15px] h-[13px]" />
        </FadeIn>

        <FadeIn delay={1.6}>
          <Headline level={2} color={'white'}>
            info@example.ee
          </Headline>
        </FadeIn>
      </div>
    </div>
  );
};
