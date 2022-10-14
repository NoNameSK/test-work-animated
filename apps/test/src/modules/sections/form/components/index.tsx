import { FC } from 'react';

import { Parallax } from 'react-scroll-parallax';

import { MainInformation } from '../modules/main-information';
import { AdditionalInformation } from '../modules/additional-information';

import { FadeIn } from '@test-work/ui-kit';

export const Form: FC = () => {
  return (
    <section className="mt-8 lg:pl-[37px] lg:mt-[77px] lg:flex">
      <div className="">
        <FadeIn delay={0.8}>
          <MainInformation />
        </FadeIn>

        <FadeIn delay={1.2}>
          <AdditionalInformation />
        </FadeIn>
      </div>

      <FadeIn delay={1.6}>
        <Parallax
          speed={-5}
          className="h-[346px] -mr-[40px] lg:w-[444px] lg:h-[356px] lg:absolute lg:-ml-[368px] lg:-z-50"
        >
          <img
            src="./assets/images/city-big.jpg"
            alt="Два человека и город на заднем фоне"
            className="mt-5 absolute -ml-5 lg:w-[444px] lg:h-[356px] lg:ml-0 lg:mt-[57px]"
          />
        </Parallax>
      </FadeIn>
    </section>
  );
};
