import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Primary } from './components/primary';
import { Active } from './components/active';

export enum EParagraphVariant {
  Primary = 'Primary',
  Active = 'Active',
}

type TParagraphProps = ComponentPropsWithoutRef<'p'>;

interface IComponentProps<ParagraphType extends EParagraphVariant>
  extends TParagraphProps {
  paragraphType: ParagraphType;
  children: ReactNode;
}

export const Paragraph = <ParagraphType extends EParagraphVariant>({
  paragraphType,
  ...props
}: IComponentProps<ParagraphType>) => {
  switch (paragraphType) {
    case EParagraphVariant.Primary:
      return <Primary {...props} />;

    case EParagraphVariant.Active:
      return <Active {...props} />;

    default:
      throw new Error('"ParagraphType" prop must be a primary or active');
  }
};
