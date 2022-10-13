import { FC } from 'react';
import {
  Button,
  Checkbox,
  EButtonSize,
  EParagraphVariant,
  ETextSize,
  Headline,
  InputControl,
  Paragraph,
} from '@test-work/ui-kit';

export const AdditionalInformation: FC = () => {
  return (
    <div className="flex flex-col gap-[20px] mt-[30px]">
      <Headline level={1} isNormal style={{ textAlign: 'center' }}>
        Другие данные
      </Headline>
      <div className="grid grid-cols-2 gap-6">
        <InputControl label="Имя" />
        <InputControl label="Почта" />
        <InputControl label="Телефон" />
        <InputControl label="Город" />
      </div>
      <InputControl fullWidth label="Сообщение" size={ETextSize.Medium} />
      <Checkbox>
        <Paragraph paragraphType={EParagraphVariant.Secondary}>
          Я согласен(на), что фирма использует мои личные данные на основе
        </Paragraph>
        <Paragraph
          paragraphType={EParagraphVariant.Secondary}
          color={'#A6C34F'}
        >
          Политики конфедициальности
        </Paragraph>
      </Checkbox>
      <Button size={EButtonSize.Medium} center>
        Отправить
      </Button>
    </div>
  );
};
