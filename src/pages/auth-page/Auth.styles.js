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
  --modal-width: 366px;
  --modal-height: 647px;
  position: absolute;
  z-index: 2;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  opacity: 1;
  width: 366px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 47px 47px 40px;

  @media screen and (max-width: 768px) {
    position: absolute;
    z-index: 2;
    top: 55px;
    opacity: 1;
    padding: 43px 20px 47px;
  }
`;

export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 42px;
  background-color: transparent;

  & img {
    width: 140px;
    height: auto;
    @media screen and (max-width: 768px) {
      width: 120px;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
  }
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    background-color: #ffffff;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
`;

export const ModalInput = styled.input`
  width: 278px;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #d0cece;
    padding: 9px 17px;
    border-radius: 30px;

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
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

  @media screen and (max-width: 768px) {
    height: 46px;
    margin-top: 40px;
    margin-bottom: 10px;
    border: none;
    font-size: 16px;
    line-height: 24px;
  }
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

  @media screen and (max-width: 768px) {
    height: 46px;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    line-height: 24px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BackToLoginBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const BackToLoginText = styled.p`
  font-size: 14px;

  & span {
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #ff6163;
    }
  }
`;
