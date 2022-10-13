import { FC } from 'react';
import { ICardProps } from '../card-props';
import { Headline } from '@test-work/ui-kit';

export const SecondaryCard: FC<ICardProps> = ({ svg, text, ...props }) => (
  <div
    {...props}
    className="shadow-[0_4px_4px_#E5E5E5] w-[111px] h-[111px] rounder-[10px]"
  >
    <div className="flex flex-col gap-5 items-center py-5 px-6">
      {svg}
      <Headline level={1} isCenter>
        {text}
      </Headline>
    </div>
  </div>
);
