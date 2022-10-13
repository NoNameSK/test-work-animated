import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { TextField } from '@mui/material';

export enum ETextSize {
  Small = 'small',
  Medium = 'medium',
}

interface IComponentProps {
  type?: string;
  required?: boolean;
  label: string;
  value?: any;
  size?: ETextSize | undefined;
  fullWidth?: boolean;
}

export const InputControl: FC<IComponentProps> = ({
  label,
  type,
  required,
  value,
  size,
  fullWidth,
  ...props
}) => {
  return (
    <TextField
      label={label}
      value={value}
      size={size ?? ETextSize.Small}
      onChange={() => {}}
      InputLabelProps={{
        shrink: true,
      }}
      required={required ?? false}
      fullWidth={fullWidth}
    />
  );
};
