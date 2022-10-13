import { FC } from 'react';

import { Instagram } from '../../svgs/social/instagram';
import { Twitter } from '../../svgs/social/twitter';
import { Vk } from '../../svgs/social/vk';
import { Facebook } from '../../svgs/social/facebook';

export const Social: FC = () => {
  return (
    <div className="mt-[23px] flex justify-center items-center gap-[21px]">
      <Facebook />

      <Vk />

      <Instagram />

      <Twitter />
    </div>
  );
};
