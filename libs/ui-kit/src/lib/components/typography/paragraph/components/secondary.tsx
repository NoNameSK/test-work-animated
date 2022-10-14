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
      color ? `text-${color}` : 'text-text'
    } ${isNormal ? 'font-normal' : 'font-bold'} ${
      isCenter ? 'text-center' : ''
    }`}
    {...props}
  />
);
