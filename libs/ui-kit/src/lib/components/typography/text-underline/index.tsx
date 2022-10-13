import { FC, ReactNode } from 'react';

export enum EPlace {
  About = 'About',
  Company = 'Company',
}

interface IComponentProps {
  children: ReactNode;
  place?: EPlace;
}

export const TextUnderline: FC<IComponentProps> = ({
  children,
  place,
  ...props
}) => {
  return (
    <h1
      className="uppercase text-[24px] leading-[28px] text-arimo text-text font-bold"
      {...props}
    >
      {children}
      <div
        className={`border-b-[3px] border-[#9CC634] ${
          place ? (place === EPlace.About ? 'w-[75px]' : 'w-[110px]') : 'w-auto'
        }`}
      />
    </h1>
  );
};
