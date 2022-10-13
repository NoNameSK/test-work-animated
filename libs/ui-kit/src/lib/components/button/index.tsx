import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';

export enum EButtonSize {
  Medium = 'medium',
  Large = 'large',
}

interface IComponentProps {
  value?: string;
  center?: boolean;
  size: EButtonSize | undefined;
  children: ReactNode;
}

export const Button: FC<IComponentProps> = ({
  value,
  size,
  center,
  children,
}) => {
  return (
    <button
      className={`${size === EButtonSize.Large ? 'w-full' : 'w-[190px]'} ${
        center ? 'mx-auto' : ''
      } bg-[#A6C34F] border-[1px] rounded-[5px] border-[#A6C34F] h-[30px] flex items-center justify-center`}
    >
      <span className="font-roboto text-[10px] leading-[12px] text-white">
        {children}
      </span>
    </button>
  );
};
