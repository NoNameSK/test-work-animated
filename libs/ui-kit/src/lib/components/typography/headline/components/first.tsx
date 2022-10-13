import { FC } from 'react';
import { ITypographyProps } from '../../typography-props';

export const First: FC<ITypographyProps> = ({
  isNormal,
  color,
  isCenter,
  ...props
}) => (
  <h1
    className={`text-[18px] leading-[21px] text-arimo ${
      isNormal ? 'font-normal' : 'font-bold'
    } ${color ? `text-${color}` : 'text-text'} ${
      isCenter ? 'text-center' : ''
    }`}
    {...props}
  />
);
