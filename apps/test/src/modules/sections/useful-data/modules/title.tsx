import { FC } from 'react';

import { Parallax } from 'react-scroll-parallax';

import { EParagraphVariant, FadeIn, Paragraph } from '@test-work/ui-kit';

export const Title: FC = () => {
  return (
    <div>
      <FadeIn delay={0.8}>
        <div className="mx-auto w-[69px]">
          <Parallax speed={-1}>
            <img
              src="./assets/images/euro-car.jpg"
              alt="Зеленая машина со значком евро внутри"
            />
          </Parallax>
        </div>
      </FadeIn>

      <div className="mt-2.5">
        <Paragraph paragraphType={EParagraphVariant.Tertiary} isCenter>
          <FadeIn delay={1.2}>
            Желаешь продать машину быстро, но не хочешь заниматься этим
            самостоятельно?
          </FadeIn>

          <br />

          <FadeIn delay={1.6}>
            Доверь нам все проблемы, связанные с продажей машины!
          </FadeIn>
        </Paragraph>
      </div>
    </div>
  );
};
