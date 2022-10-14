import { EInputSize, EInputType } from './enum/input-enums';

export interface IInputProps {
  type: EInputType;
  labelText: string;
  size?: EInputSize;
  required?: boolean;
  className?: string;
}
