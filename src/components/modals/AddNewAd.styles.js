import styled from 'styled-components';
import { Button, HeadingH3 } from '../../App.styles';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media screen and (max-width: 600px) {
    position: static;
    width: 1px;
    overflow: auto;
  }
`;

export const ContainerBg = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;

  @media screen and (max-width: 600px) {
    position: absolute;
  }
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (600px / 2));
  top: 60px;
  opacity: 1;

  @media screen and (max-width: 600px) {
    position: absolute;
    left: -47px;
    top: -231px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: auto;
  padding: 20px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: auto;
    padding: 30px 20px 30px;
    border-radius: 0;
  }
`;

export const ModalHeading = styled.h3`
  ${HeadingH3}

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 0;
      cursor: pointer;
    }
  }
`;

export const FormNewAd = styled.form`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin-top: 22px;
  }
`;

export const FormNewAdBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & label {
    color: #000000;
    font-size: 16px;
    line-height: 150%;
    font-style: normal;
    margin-bottom: 4px;

    @media screen and (max-width: 600px) {
      margin-bottom: 5px;
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }

  &:last-of-type {
    position: relative;
  }

  & input,
  textarea {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 150%;
    padding: 13px 19px;
    -moz-appearance: textfield;

    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-style: normal;
      line-height: 150%;
      color: #0000004d;
    }

    @media screen and (max-width: 600px) {
      padding: 9px 17px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 30px;
      font-size: 16px;
      line-height: 1;
    }
  }

  & textarea {
    resize: none;
    width: 100%;
    max-height: 200px;
    outline: none;

    @media screen and (max-width: 600px) {
      width: 100%;
      max-height: 107px;

      &::placeholder {
        font-size: 14px;
        line-height: 21px;
        color: #c4c4c4;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

export const FormNewAdText = styled.p`
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  color: #000000;
  margin-bottom: 10px;

  & span {
    color: rgba(0, 0, 0, 0.3);
    margin-left: 10px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;

    & span {
      display: block;
      margin-left: 0px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const FormNewAdBarImg = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0px -5px 10px;
    overflow: hidden;
  }
`;

export const FormNewAdImgLabel = styled.label`
  width: 90px;
  height: 90px;
  position: relative;
  z-index: 0;
  margin-right: 10px;
  background-color: #f0f0f0;
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
    z-index: ${(props) => (props.$visibleImg ? '-1' : '1')};
  }

  &::before {
    transform: rotate(90deg);
  }

  & img {
    display: ${(props) => (props.$visibleImg ? 'block' : 'none')};
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 600px) {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 600px) {
    display: block;
    width: 90px;
    min-width: 90px;
    height: 90px;
    background-color: #f0f0f0;
    margin: 0 5px;
  }
`;

export const FormNewAdImgInput = styled.input`
  position: absolute;
  width: 2px;
  height: 2px;
  top: 0;
  left: 0;
  z-index: -100;
  visibility: hidden;
`;

export const FormNewAdPriceInput = styled.input`
  width: 200px;
  color: #000000;

  @media screen and (max-width: 600px) {
    width: 100%;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
  }
`;

export const FormNewAdPriceCover = styled.div`
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  position: absolute;
  left: 170px;
  bottom: 13px;
  z-index: 0;
  background-color: #ffffff;

  &::after {
    content: '₽';
    width: 24px;
    height: 24px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
  }

  @media screen and (max-width: 600px) {
    width: 21px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    bottom: 9px;
    left: auto;
    right: 18px;

    &::after {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const FormNewAdPublishButton = styled.button`
  ${Button}

  width: 181px;
  height: 50px;
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  padding: 13px 37px;
  margin-top: 20px;
  background-color: ${(props) => (props.$disabled ? '#afb3ba' : '')};

  &:hover {
    background-color: ${(props) => (props.$disabled ? '#afb3ba' : '')};
  }

  @media screen and (max-width: 600px) {
    margin-top: 10px;
    width: 100%;
    height: 46px;
  }
`;

export const DeleteImgButton = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 2px;
  right: 7px;
  z-index: 3;
  cursor: pointer;
`;

export const DeleteImgButtonLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::after,
    &::before {
      background-color: #0080c1;
    }
  }
`;
