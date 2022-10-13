import { FC } from 'react';

import { features } from '../../data/features';

import { EParagraphVariant, Paragraph } from '@test-work/ui-kit';

export const Features: FC = () => {
  return (
    <ul>
      {features.map((feature) => (
        <li className="mt-[30px] flex gap-[10px] items-center before:h-[22px] before:content-success">
          <Paragraph paragraphType={EParagraphVariant.Additional}>
            {feature}
          </Paragraph>
        </li>
      ))}
    </ul>
  );
};
