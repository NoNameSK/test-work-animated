import { FC } from 'react';

import { Parallax } from 'react-scroll-parallax';

import { MainInformation } from '../modules/main-information';
import { AdditionalInformation } from '../modules/additional-information';

import { FadeIn } from '@test-work/ui-kit';

export const Form: FC = () => {
  return (
    <section className="mt-8">
      <FadeIn delay={0.8}>
        <MainInformation />
      </FadeIn>

      <FadeIn delay={1.2}>
        <AdditionalInformation />
      </FadeIn>

      <FadeIn delay={1.6}>
        <Parallax speed={-5} className="h-[346px] -mr-[40px]">
          <img
            src="./assets/images/city.jpg"
            alt="Два человека и город на заднем фоне"
            className="mt-5 absolute -ml-5"
          />
        </Parallax>
      </FadeIn>
    </section>
  );
};
