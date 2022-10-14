import { FC } from 'react';

import {
  Button,
  Checkbox,
  EButtonSize,
  EInputSize,
  EInputType,
  EParagraphVariant,
  ETextSize,
  Headline,
  Input,
  InputControl,
  Paragraph,
} from '@test-work/ui-kit';

export const AdditionalInformation: FC = () => {
  return (
    <div className="flex flex-col gap-[20px] mt-[30px] lg:max-w-[47%] lg:mt-[24px] lg:gap-[17px]">
      <Headline level={1} isNormal style={{ textAlign: 'center' }}>
        Другие данные
      </Headline>
      <div className="grid grid-cols-2 gap-6">
        <Input labelText="Имя" type={EInputType.Text} />
        <Input labelText="Почта" type={EInputType.Text} />
        <Input labelText="Телефон" type={EInputType.Text} required />
        <Input labelText="Город" type={EInputType.Text} />
        <Input
          labelText="Сообщение"
          type={EInputType.Text}
          size={EInputSize.Large}
          className={'col-span-2'}
        />
      </div>
      <Checkbox>
        <Paragraph paragraphType={EParagraphVariant.Secondary} isCenter>
          Я согласен(на), что фирма использует мои личные данные на основе
        </Paragraph>
        <div className="text-[#A6C34F]">
          <Paragraph
            paragraphType={EParagraphVariant.Secondary}
            color={'checkBox'}
            isCenter
          >
            Политики конфедициальности
          </Paragraph>
        </div>
      </Checkbox>
      <div className="lg:pl-5">
        <Button size={EButtonSize.Medium} center>
          Отправить
        </Button>
      </div>
    </div>
  );
};
