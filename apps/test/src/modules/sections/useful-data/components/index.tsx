import { FC } from 'react';

import { Title } from '../modules/title';
import { Slider } from '../modules/slider/slider';

export const UsefulData: FC = () => {
  return (
    <section className="mt-[50px]">
      <Title />
      <Slider />
    </section>
  );
};
