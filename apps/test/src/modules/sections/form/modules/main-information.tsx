import { Button, EButtonSize, Headline, InputControl } from '@test-work/ui-kit';
import { FC } from 'react';

export const MainInformation: FC = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <Headline level={1} isNormal style={{ textAlign: 'center' }}>
        Данные автомобиля
      </Headline>
      <div className="grid grid-cols-3 gap-6">
        <InputControl label="Марка" />
        <InputControl label="Модель" />
        <InputControl label="Мотор" />
        <InputControl label="Год" />
        <InputControl label="Топливо" />
        <InputControl label="КПП" />
        <InputControl label="Пробег" />
        <InputControl label="Техосмотр" />
        <InputControl label="Желаемая цена" />
      </div>
      <Button size={EButtonSize.Large}>Добавить фото</Button>
    </div>
  );
};
