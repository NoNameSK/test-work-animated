import { FC } from 'react';

import { Parallax } from 'react-scroll-parallax';

import {
  EParagraphVariant,
  FadeIn,
  Headline,
  Paragraph,
} from '@test-work/ui-kit';

import { Watch } from '../svgs/watch';
import { Euro } from '../svgs/euro';
import { Success } from '../svgs/success';

export const DesktopSlider: FC = () => {
  return (
    <Parallax speed={-4} className="mt-5 items-center hidden lg:flex -ml-12">
      <FadeIn delay={2.4} className="-z-50">
        <div className="w-[183px] h-[233px] bg-[#FEFEFE] rounded-[10px_0px_0px_10px] shadow-[0_0_4px_rgba(0,0,0,0.25)] border-[#BFD093] border-[1px] -z-50 -mr-0.5">
          <div className="py-[41px] px-[10px] flex flex-col gap-5 items-center opacity-75">
            <Watch />
            <Headline level={1}>Быстро</Headline>
            <div className="text-center font-arimo text-[10px] leading-[11px] font-normal">
              Наша цель помочь вам продать машину как можно быстрее, оформив все
              необходимые докуметы в ускоренном порядке, и мы сделаем для этого
              всё от себя зависящее.
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.8}>
        <div className="w-[183px] h-[273px] bg-[#FEFFFB] rounded-[10px] shadow-[0_0_4px_rgba(0,0,0,0.25)] border-[#9CC634] border-[1px]">
          <div className="pb-[41px] pt-[30px] pl-[9px] pr-2 flex flex-col items-center">
            <Success />
            <div className="pt-[23px] pb-[7px]">
              <Headline level={1}>Просто</Headline>
            </div>
            <Paragraph
              paragraphType={EParagraphVariant.Tertiary}
              isNormal
              isCenter
            >
              Мы купим вашу машину при любом условии! Не важно есть ли на ней
              техосмотр, нуждается ли она в ремонте или имеет неисправности; Мы
              приобритём вашу машину без лишних задержек и вопросов.
            </Paragraph>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={3.2} className="-z-50">
        <div className="w-[183px] h-[233px] bg-[#FEFEFE] rounded-[0px_10px_10px_0px] shadow-[0_0_4px_rgba(0,0,0,0.25)] border-[#BFD093] border-[1px] -z-50 -ml-0.5">
          <div className="py-[41px] px-[10px] flex flex-col gap-5 items-center opacity-75">
            <Euro />
            <Headline level={1}>Прибыльно</Headline>
            <div className="text-center font-arimo text-[10px] leading-[11px] font-normal">
              Разумеется вы хотели бы продать свою машину с максимальной
              выгодой. Мы способны предложить вам за ваш автомобиль самую
              высокую цену на рынке.
            </div>
          </div>
        </div>
      </FadeIn>
    </Parallax>
  );
};
