import { FC } from 'react';

import { Parallax } from 'react-scroll-parallax';

import {
  EParagraphVariant,
  EPlace,
  FadeIn,
  Paragraph,
  TextUnderline,
} from '@test-work/ui-kit';

import { companyItems } from '../data/company-items';

import { Features } from './features';

export const Company: FC = () => {
  return (
    <section className="mt-[50px] pb-20 lg:mt-[244px] lg:flex">
      <div className="flex flex-col gap-5 lg:max-w-[45%]">
        <FadeIn delay={0.8}>
          <TextUnderline place={EPlace.Company}>COMPANY NAME</TextUnderline>
        </FadeIn>

        <FadeIn delay={1.2}>
          <Paragraph paragraphType={EParagraphVariant.Additional} isNormal>
            Каждый автовладелец хотя бы раз сталкивался с необходимостью продать
            машину. Конечно же, вы хотите селать это быстрее и с максимальной
            выгодой. Наши специалисты возьмут на себя все проблемы! Нам можно
            полностью доверять. Мы не являемся кредитной организацией или
            ломбардом. Мы покупаем ваши машины, в любом виде и состоянии. Да,
            так просто! Наша цель - купить вашу машину максимально быстро,
            просто и выгодно для вас.
          </Paragraph>
        </FadeIn>

        <Parallax speed={-3}>
          <div className="flex gap-5 lg:mt-12 lg:gap-[41px]">
            {companyItems.map((item, index) => (
              <FadeIn delay={1.4 + index / 2} key={index}>
                <div className="shadow-[0_4px_4px_#E5E5E5] w-[111px] h-[111px] rounder-[10px]">
                  <div className="flex flex-col gap-5 items-center py-5 px-6">
                    {item.svg}
                    <p className="font-arimo text-[16px] leading-[18px] font-bold text-text text-center">
                      {item.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Parallax>
      </div>

      <Features />
    </section>
  );
};
