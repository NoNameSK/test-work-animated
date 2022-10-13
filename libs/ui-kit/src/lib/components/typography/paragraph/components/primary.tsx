import { FC } from 'react';
import { ITypographyProps } from '../../typography-props';

export const Primary: FC<ITypographyProps> = ({
  isNormal,
  color,
  isCenter,
  ...props
}) => (
  <p
    className={`font-roboto font-black text-white text-[16px] leading-[19px] ${
      isNormal ? 'font-normal' : 'font-bold'
    } ${color ? `text-[${color}]` : ''} ${isCenter ? 'text-center' : ''}`}
    {...props}
  />
);
