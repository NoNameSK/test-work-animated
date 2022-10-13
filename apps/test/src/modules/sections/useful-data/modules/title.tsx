import { FC } from 'react';
import { Car, EParagraphVariant, Paragraph } from '@test-work/ui-kit';

export const Title: FC = () => {
  return (
    <div>
      <div className="mx-auto w-[69px]">
        <Car />
      </div>
      <div className="mt-2.5">
        <Paragraph paragraphType={EParagraphVariant.Tertiary} isCenter>
          Желаешь продать машину быстро, но не хочешь заниматься этим
          самостоятельно?
          <br />
          Доверь нам все проблемы, связанные с продажей машины!
        </Paragraph>
      </div>
    </div>
  );
};
