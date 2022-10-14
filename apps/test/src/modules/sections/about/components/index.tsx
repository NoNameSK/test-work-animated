import { FC } from 'react';

import { Parallax } from 'react-scroll-parallax';

import {
  EParagraphVariant,
  EPlace,
  FadeIn,
  Headline,
  Paragraph,
  TextUnderline,
} from '@test-work/ui-kit';

import { aboutItems } from '../data/about-items';
import { Items } from './items';

export const About: FC = () => {
  return (
    <section className="mt-[50px] lg:mt-[110px]">
      <div className="flex flex-col gap-5 lg:max-w-[55%]">
        <FadeIn delay={0.8}>
          <TextUnderline place={EPlace.About}>О нас</TextUnderline>
        </FadeIn>

        <FadeIn delay={1} className="z-50">
          <Headline level={1}>
            Мы действуем на рынке автомобилей уже много лет и знаем как оформить
            сделку быстро и без проблем.
          </Headline>
        </FadeIn>

        <FadeIn delay={1.4} className="lg:max-w-[82%] z-50">
          <Paragraph paragraphType={EParagraphVariant.Tertiary} isNormal>
            Первое, что следует сделать заинтересованному в продаже машины
            человеку – связаться с нами, заполнив контактную форму на сайте или
            позвонив по телефону. На основании полученного со слов описания
            машины мы назовем предварительную стоимость. Точное ценовое
            предложение станет известно после проведения оценки, которую
            выполнит наш специалист, выехав для этого в удобное для клиента
            место.
          </Paragraph>
        </FadeIn>

        <Items />
      </div>
      <FadeIn delay={1.6} className="lg:hidden">
        <Parallax speed={-5} className="-z-50">
          <div className="h-[237px]">
            <img
              src="./assets/images/Illustration.jpg"
              alt="Два человека смотрят в ноутбук и на заднем фоне белая машина"
              className="-mt-5 absolute -ml-5 -z-50"
            />
          </div>
        </Parallax>
      </FadeIn>
      <FadeIn delay={1.6} className="hidden lg:block  -z-50">
        <Parallax speed={-3} className="-z-50">
          <div className=" -z-50">
            <img
              src="./assets/images/Illustration-big.jpg"
              alt="Два человека смотрят в ноутбук и на заднем фоне белая машина"
              className="absolute -z-50 -mt-[366px] ml-[118px]"
            />
          </div>
        </Parallax>
      </FadeIn>
    </section>
  );
};
