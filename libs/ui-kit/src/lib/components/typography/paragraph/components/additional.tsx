import { FC } from 'react';
import { ITypographyProps } from '../../typography-props';

export const Additional: FC<ITypographyProps> = ({
  isNormal,
  color,
  isCenter,
  ...props
}) => (
  <p
    className={`font-arimo text-[15px] leading-[17px] ${
      isNormal ? 'font-normal' : 'font-bold'
    } ${color ? `text-[${color}]` : 'text-text'} ${
      isCenter ? 'text-center' : ''
    }`}
    {...props}
  />
);
