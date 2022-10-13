import { Button, EButtonSize, Headline, InputControl } from '@test-work/ui-kit';
import { FC } from 'react';

export const MainInformation: FC = () => {
  return (
    <div className="flex flex-col gap-[20px] lg:max-w-[60%] lg:gap-[32px]">
      <Headline level={1} isNormal style={{ textAlign: 'center' }}>
        Данные автомобиля
      </Headline>
      <div className="grid grid-cols-3 gap-6 lg:grid-cols-4 lg:gap-row-[30px] lg:gap-col-[10px]">
        <InputControl label="Марка" />
        <InputControl label="Модель" />
        <InputControl label="Мотор" />
        <InputControl label="Год" />
        <InputControl label="Топливо" />
        <InputControl label="КПП" />
        <InputControl label="Пробег" />
        <InputControl label="Техосмотр" />
        <InputControl label="Желаемая цена" />
        <Button size={EButtonSize.Large} className="col-span-3">
          Добавить фото
        </Button>
      </div>
    </div>
  );
};
