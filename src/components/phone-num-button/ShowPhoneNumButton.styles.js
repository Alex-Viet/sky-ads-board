import styled from 'styled-components';
import { Button } from '../../App.styles';

export const PhoneNumButton = styled.button`
  ${Button}

  width: 214px;
  font-size: 16px;
  line-height: 140%;
  padding: 10px 37px;
  order: 3;

  & span {
    display: block;
    font-size: 14px;
  }

  @media screen and (max-width: 590px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;

    & span {
      font-size: 12px;
    }
  }
`;

export const NoPhoneText = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
`;
