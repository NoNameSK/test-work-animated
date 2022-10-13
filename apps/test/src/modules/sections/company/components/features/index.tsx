import { FC } from 'react';

import { features } from '../../data/features';

import { EParagraphVariant, FadeIn, Paragraph } from '@test-work/ui-kit';

export const Features: FC = () => {
  return (
    <ul>
      {features.map((feature, index) => (
        <FadeIn delay={0.2 + index}>
          <li className="mt-[30px] flex gap-[10px] items-center before:h-[22px] before:content-success">
            <FadeIn delay={0.5 + index}>
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
