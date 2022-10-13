import { FC } from 'react';
import { ICardProps } from '../card-props';
import { Headline } from '@test-work/ui-kit';

export const PrimaryCard: FC<ICardProps> = ({ svg, text, ...props }) => (
  <div {...props} className="flex flex-col gap-[10px] items-center">
    {svg}
    <Headline level={3} isCenter>
      {text}
    </Headline>
  </div>
);
