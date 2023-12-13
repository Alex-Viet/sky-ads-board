import { useState } from 'react';
import { PhoneNumButton } from './ShowPhoneNumButton.styles';

export const ShowPhoneNumButton = ({ phone }) => {
  const [showPhone, setShowPhone] = useState(false);

  const toggleShowPhoneNum = () => {
    setShowPhone(!showPhone);
  };

  return phone ? (
    <PhoneNumButton onClick={toggleShowPhoneNum}>
      Показать&nbsp;телефон
      <span>{showPhone ? phone : `${phone.slice(0, 4)} XXX XX XX`}</span>
    </PhoneNumButton>
  ) : (
    <p>К сожалению, продавец не оставил номер телефона</p>
  );
};
