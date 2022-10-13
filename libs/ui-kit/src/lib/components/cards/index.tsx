import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { PrimaryCard } from './components/primary';
import { SecondaryCard } from './components/secondary';

export enum ECardVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

type TParagraphProps = ComponentPropsWithoutRef<'div'>;

interface IComponentProps<CardType extends ECardVariant>
  extends TParagraphProps {
  cardType: CardType;
  svg: ReactNode;
  text: string;
  children?: ReactNode;
}

export const Card = <CardType extends ECardVariant>({
  cardType,
  svg,
  text,
  ...props
}: IComponentProps<CardType>) => {
  switch (cardType) {
    case ECardVariant.Primary:
      return <PrimaryCard {...props} />;

    case ECardVariant.Secondary:
      return <SecondaryCard {...props} />;

    default:
      throw new Error('Card must be primary or secondary');
  }
};
