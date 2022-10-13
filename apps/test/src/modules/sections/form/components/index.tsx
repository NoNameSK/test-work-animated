import { FC } from 'react';
import { MainInformation } from '../modules/main-information';
import { AdditionalInformation } from '../modules/additional-information';

export const Form: FC = () => {
  return (
    <section className="mt-8">
      <MainInformation />
      <AdditionalInformation />
      <div className="h-[346px]">
        <img
          src="./assets/images/city.jpg"
          alt="Два человека и город на заднем фоне"
          className="mt-5 absolute -ml-5"
        />
      </div>
    </section>
  );
};
