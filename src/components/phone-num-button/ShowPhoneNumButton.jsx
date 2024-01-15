import { useState } from 'react';
import * as S from './ShowPhoneNumButton.styles';

export const ShowPhoneNumButton = ({ phone }) => {
  const [showPhone, setShowPhone] = useState(false);

  const toggleShowPhoneNum = () => {
    setShowPhone(!showPhone);
  };

  return phone ? (
    <S.PhoneNumButton onClick={toggleShowPhoneNum}>
      Показать&nbsp;телефон
      <span>{showPhone ? phone : `${phone.slice(0, 4)} XXX XX XX`}</span>
    </S.PhoneNumButton>
  ) : (
    <S.NoPhoneText>
      К сожалению, продавец не оставил номер телефона
    </S.NoPhoneText>
  );
};
