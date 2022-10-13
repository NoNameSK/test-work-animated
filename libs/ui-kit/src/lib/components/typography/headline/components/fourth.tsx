import { FC } from 'react';
import { ITypographyProps } from '../../typography-props';

export const Fourth: FC<ITypographyProps> = ({
  isNormal,
  color,
  isCenter,
  ...props
}) => (
  <h4
    className={`text-[24px] leading-[28px] text-arimo text-text ${
      isNormal ? 'font-normal' : 'font-bold'
    } ${color ? `text-[${color}]` : ''} ${isCenter ? 'text-center' : ''}`}
    {...props}
  />
);
