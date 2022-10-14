import { FC } from 'react';

import { ISVGProps } from '@test-work/ui-kit';

export const Required: FC<ISVGProps> = ({ ...props }) => (
  <svg
    width="3"
    height="3"
    viewBox="0 0 3 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1.5" cy="1.5" r="1.5" fill="#A6C34F" />
  </svg>
);
