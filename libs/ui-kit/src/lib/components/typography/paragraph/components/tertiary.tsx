import { FC } from 'react';

import { ITypographyProps } from '../../typography-props';

export const Tertiary: FC<ITypographyProps> = ({
  isNormal,
  color,
  isCenter,
  ...props
}) => (
  <p
    className={`font-arimo text-[12px] leading-[14px] ${
      isNormal ? 'font-normal' : 'font-bold'
    } ${color ? `text-${color}` : 'text-text'} ${
      isCenter ? 'text-center' : ''
    }`}
    {...props}
  />
);
