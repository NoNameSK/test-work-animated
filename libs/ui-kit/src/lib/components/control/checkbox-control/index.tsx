import { FC, ReactNode } from 'react';

interface IComponentProps {
  children: ReactNode;
}

export const Checkbox: FC<IComponentProps> = ({ children, ...props }) => {
  return (
    <div className="flex gap-2.5 items-start lg:gap-5 ">
      <input
        type="checkbox"
        className="outline-[#CCCCCC] outline-1 rounded-[5px] w-[16px] h-[16px] accent-[#A6C34F] text-white"
      />
      <div className="pt-1">{children}</div>
    </div>
  );
};
