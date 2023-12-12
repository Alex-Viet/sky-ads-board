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
`;

export const ContainerBg = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (600px / 2));
  top: 60px;
  opacity: 1;
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
`;

export const ModalHeading = styled.h3`
  ${HeadingH3}
`;

export const FormNewAd = styled.form`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormNewAdBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & label {
    color: #000000;
    font-size: 16px;
    line-height: 150%;
    font-style: normal;
    margin-bottom: 4px;
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

    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-style: normal;
      line-height: 150%;
      color: #0000004d;
    }
  }

  & textarea {
    resize: none;
    width: 100%;
    max-height: 200px;
    outline: none;
  }

  & input:first-of-type {
    width: 100%;
  }

  & input:last-of-type {
    width: 200px;
    color: #000000;
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
`;

export const FormNewAdBarImg = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const FormNewAdImg = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
  z-index: 0;
  margin-right: 10px;

  & img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 2;
  }
`;

export const FormNewAdImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }

  &::before {
    transform: rotate(90deg);
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
`;

export const FormNewAdButtonPublish = styled.button`
  ${Button}

  width: 181px;
  height: 50px;
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  padding: 13px 37px;
  margin-top: 10px;
`;
