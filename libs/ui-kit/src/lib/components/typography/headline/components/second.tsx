import { FC } from 'react';
import { ITypographyProps } from '../../typography-props';

export const Second: FC<ITypographyProps> = ({
  isNormal,
  color,
  isCenter,
  ...props
}) => (
  <h2
    className={`text-[14x] leading-[16px] text-arimo text-text ${
      isNormal ? 'font-normal' : 'font-bold'
    } ${color ? `text-[${color}]` : ''} ${isCenter ? 'text-center' : ''}`}
    {...props}
  />
);
