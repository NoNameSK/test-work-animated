import { FC } from 'react';
import { ITypographyProps } from '../../typography-props';

export const Secondary: FC<ITypographyProps> = ({
  isNormal,
  color,
  isCenter,
  ...props
}) => (
  <p
    className={`font-roboto text-[10px] leading-[12px] ${
      isNormal ? 'font-normal' : 'font-bold'
    } ${color ? `text-${color}` : 'text-text'} ${
      isCenter ? 'text-center' : ''
    }`}
    {...props}
  />
);
