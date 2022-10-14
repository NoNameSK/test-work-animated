import { FC } from 'react';

import { features } from '../../data/features';

import { EParagraphVariant, FadeIn, Paragraph } from '@test-work/ui-kit';

export const Features: FC = () => {
  return (
    <ul className="lg:ml-[71px] lg:flex lg:flex-col lg:gap-[23px]">
      {features.map((feature, index) => (
        <FadeIn delay={0.2 + index}>
          <li className="mt-[30px] flex gap-[10px] items-center before:h-[22px] before:content-success lg:gap-[18px] lg:max-w-[331px] lg:mt-0">
            <FadeIn delay={0.3 + index}>
              <Paragraph paragraphType={EParagraphVariant.Additional}>
                {feature}
              </Paragraph>
            </FadeIn>
          </li>
        </FadeIn>
      ))}
    </ul>
  );
};
