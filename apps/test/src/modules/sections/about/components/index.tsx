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

export const About: FC = () => {
  return (
    <section className="mt-[50px]">
      <div className="flex flex-col gap-5">
        <FadeIn delay={0.8}>
          <TextUnderline place={EPlace.About}>О нас</TextUnderline>
        </FadeIn>

        <FadeIn delay={1}>
          <Headline level={2}>
            Мы действуем на рынке автомобилей уже много лет и знаем как оформить
            сделку быстро и без проблем.
          </Headline>
        </FadeIn>

        <FadeIn delay={1.4}>
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

        <div className="flex gap-5">
          {aboutItems.map((item, index) => (
            <FadeIn delay={1 + index / 2} key={item.text} className="z-10">
              <div className="flex flex-col gap-[10px] items-center text-center z-10">
                {item.svg}
                <Headline level={3} isCenter>
                  {item.text}
                </Headline>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <FadeIn delay={1.6}>
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
    </section>
  );
};
