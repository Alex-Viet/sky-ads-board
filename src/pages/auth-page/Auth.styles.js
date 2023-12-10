import styled from 'styled-components';
import { Button } from '../../App.styles';

export const AuthContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (647px / 2));
  opacity: 1;
  width: 366px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 42px 47px;
`;

export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 42px;
  background-color: transparent;

  & img {
    width: 140px;
    height: auto;
  }
`;

export const ModalForm = styled.form``;

export const ModalInput = styled.input`
  width: 100%;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-bottom: 38px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`;

export const ModalButton = styled.button`
  ${Button}

  width: 278px;
  height: 52px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  margin-top: 30px;
`;

export const ModalButtonRegister = styled.button`
  width: 278px;
  height: 52px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  color: #000;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  margin-top: 30px;

  &:hover {
    background-color: #f4f5f6;
  }
`;
