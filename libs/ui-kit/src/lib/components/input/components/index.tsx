import { FC, useId } from 'react';

import { IInputProps } from '../input-props';
import { EInputSize } from '../enum/input-enums';

import { EParagraphVariant, Paragraph } from '../../typography';

import { Required } from '../svgs/required';

export const Input: FC<IInputProps> = ({
  type,
  labelText,
  size,
  required,
  className,
  ...props
}) => {
  const id = useId();

  return (
    <div className={`relative ${className}`}>
      <label
        htmlFor={id}
        className="absolute -top-[5px] left-1.5 pl-[5px] pr-[5px] bg-white z-10 flex gap-0.5"
      >
        <Paragraph paragraphType={EParagraphVariant.Secondary}>
          {labelText}
        </Paragraph>

        {required ? <Required /> : null}
      </label>

      <input
        id={id}
        className={`border - [1px] border-solid border-[#CCCCCC] rounded-[5px] ${
          size === EInputSize.Large ? 'w-full h-[58px]' : 'w-full h-5 p-1'
        }`}
        type={type}
      />
    </div>
  );
};
