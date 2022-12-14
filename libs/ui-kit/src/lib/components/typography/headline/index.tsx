import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { First } from './components/first';
import { Second } from './components/second';
import { Third } from './components/third';

type UHeadlineLevel = 1 | 2 | 3;

type THeadlineProps = ComponentPropsWithoutRef<'h1'>;

interface IComponentProps<Level extends UHeadlineLevel> extends THeadlineProps {
  level: Level;
  color?: string;
  isNormal?: boolean;
  isCenter?: boolean;
  children: ReactNode;
}

export const Headline = <Level extends UHeadlineLevel>({
  level,
  ...props
}: IComponentProps<Level>) => {
  switch (level) {
    case 1:
      return <First {...props} />;

    case 2:
      return <Second {...props} />;

    case 3:
      return <Third {...props} />;

    default:
      throw new Error('"level" prop must be a number in range [1 .. 2]');
  }
};
