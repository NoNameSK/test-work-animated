import { FC, ReactNode, useEffect, useState } from 'react';

import { aboutItems } from '../data/about-items';

import { FadeIn, Headline } from '@test-work/ui-kit';

interface IComponentProps {
  isMobile?: boolean;
}

const swap = (arr = [], start = 0, end = 0) => {
  const result = new Map();

  arr.map((_, index) => {
    switch (index) {
      case start:
        return result.set(index, arr[end]);
      case end:
        return result.set(index, arr[start]);
      default:
        return result.set(index, arr[index]);
    }
  });
  return Array.from(result.values());
};

export const Items: FC<IComponentProps> = ({ isMobile }) => {
  const [items, setItems] = useState<
    {
      svg: ReactNode;
      text: string;
    }[]
  >(aboutItems);

  useEffect(() => {
    if (!isMobile) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setItems(swap(aboutItems, 2, 1));
    }
  }, [isMobile]);

  return (
    <div className="flex gap-5 lg:mt-[19px] lg:flex-col lg:gap-[47px]">
      {items.map((item, index) => (
        <FadeIn delay={1 + index / 2} key={item.text} className="z-10">
          <div className="flex flex-col gap-[10px] items-center text-center z-10 lg:flex-row lg:max-w-[307px] lg:gap-3">
            <div>{item.svg}</div>
            <Headline level={2} isCenter>
              <div className="lg:text-left lg:leading-[18px]">{item.text}</div>
            </Headline>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};
