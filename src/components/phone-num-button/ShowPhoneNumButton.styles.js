import styled from 'styled-components';
import { Button } from '../../App.styles';

export const PhoneNumButton = styled.button`
  ${Button}

  width: 214px;
  font-size: 16px;
  line-height: 140%;
  padding: 10px 37px;

  & span {
    display: block;
    font-size: 14px;
  }
`;
