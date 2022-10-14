import { FC } from 'react';

import { Parallax } from 'react-scroll-parallax';

import { FadeIn } from '@test-work/ui-kit';

import { Title } from '../modules/title';
import { Slider } from '../modules/slider/components';

export const UsefulData: FC = () => {
  return (
    <section className="mt-[50px] lg:mt-[37px] lg:flex">
      <FadeIn delay={1.6} className="hidden lg:block pt-12 -ml-14 -z-50">
        <Parallax speed={-3} className="">
          <div className="w-[516px] h-[237px]">
            <img
              src="./assets/images/offers.jpg"
              alt="Мужчина смотри в ноутбук, а на фоне зеленый фон с аналитикой"
              className="absolute-z-50"
            />
          </div>
        </Parallax>
      </FadeIn>
      <div className="lg:-ml-14">
        <Title />
        <Slider />
      </div>
    </section>
  );
};
