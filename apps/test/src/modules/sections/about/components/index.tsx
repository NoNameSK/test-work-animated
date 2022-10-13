import { FC } from 'react';

import {
  EParagraphVariant,
  EPlace,
  Headline,
  Paragraph,
  TextUnderline,
} from '@test-work/ui-kit';

import { aboutItems } from '../data/about-items';

export const About: FC = () => {
  return (
    <section className="mt-[50px]">
      <div className="flex flex-col gap-5">
        <TextUnderline place={EPlace.About}>О нас</TextUnderline>
        <Headline level={2}>
          Мы действуем на рынке автомобилей уже много лет и знаем как оформить
          сделку быстро и без проблем.
        </Headline>
        <Paragraph paragraphType={EParagraphVariant.Tertiary} isNormal>
          Первое, что следует сделать заинтересованному в продаже машины
          человеку – связаться с нами, заполнив контактную форму на сайте или
          позвонив по телефону. На основании полученного со слов описания машины
          мы назовем предварительную стоимость. Точное ценовое предложение
          станет известно после проведения оценки, которую выполнит наш
          специалист, выехав для этого в удобное для клиента место.
        </Paragraph>
        <div className="flex gap-5">
          {aboutItems.map((item) => (
            <div
              key={item.text}
              className="flex flex-col gap-[10px] items-center text-center"
            >
              {item.svg}
              <Headline level={3} isCenter>
                {item.text}
              </Headline>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[237px]">
        <img
          src="./assets/images/Illustration.jpg"
          alt="Два человека смотрят в ноутбук и на заднем фоне белая машина"
          className="-mt-5 absolute -ml-5 -z-50"
        />
      </div>
    </section>
  );
};
