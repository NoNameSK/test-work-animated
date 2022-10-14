import { FC } from 'react';

import { MobileSlider } from './mobile-slider';
import { DesktopSlider } from './desktop-slider';

export const Slider: FC = () => {
  return (
    <>
      <MobileSlider />
      <DesktopSlider />
    </>
  );
};
