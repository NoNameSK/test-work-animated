import { FC } from 'react';

import {
  Button,
  EButtonSize,
  EInputType,
  Headline,
  Input,
  InputControl,
} from '@test-work/ui-kit';

export const MainInformation: FC = () => {
  return (
    <div className="flex flex-col gap-[20px] lg:max-w-[60%] lg:gap-[32px]">
      <Headline level={1} isNormal style={{ textAlign: 'center' }}>
        Данные автомобиля
      </Headline>
      <div className="grid grid-cols-3 gap-6 lg:grid-cols-4 lg:gap-row-[30px] lg:gap-col-[10px]">
        <Input labelText="Марка" type={EInputType.Text} />
        <Input labelText="Модель" type={EInputType.Text} />
        <Input labelText="Мотор" type={EInputType.Text} />
        <Input labelText="Год" type={EInputType.Number} />
        <Input labelText="Топливо" type={EInputType.Text} />
        <Input labelText="КПП" type={EInputType.Text} />
        <Input labelText="Пробег" type={EInputType.Number} />
        <Input labelText="Техосмотр" type={EInputType.Text} />
        <Input labelText="Желаемая цена" type={EInputType.Number} required />
        <Button size={EButtonSize.Large} className="col-span-3">
          Добавить фото
        </Button>
      </div>
    </div>
  );
};
