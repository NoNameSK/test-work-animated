import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { Primary } from './components/primary';
import { Secondary } from './components/secondary';
import { Tertiary } from './components/tertiary';
import { Additional } from './components/additional';

export enum EParagraphVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
  Additional = 'Additional',
}

type TParagraphProps = ComponentPropsWithoutRef<'p'>;

interface IComponentProps<ParagraphType extends EParagraphVariant>
  extends TParagraphProps {
  paragraphType: ParagraphType;
  isNormal?: boolean;
  isCenter?: boolean;
  color?: string;
  children: ReactNode;
}

export const Paragraph = <ParagraphType extends EParagraphVariant>({
  paragraphType,
  ...props
}: IComponentProps<ParagraphType>) => {
  switch (paragraphType) {
    case EParagraphVariant.Primary:
      return <Primary {...props} />;

    case EParagraphVariant.Secondary:
      return <Secondary {...props} />;

    case EParagraphVariant.Tertiary:
      return <Tertiary {...props} />;

    case EParagraphVariant.Additional:
      return <Additional {...props} />;

    default:
      throw new Error(
        '"ParagraphType" prop must be a primary or active | Tertiary'
      );
  }
};
