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
    position: relative;
  }
`;

export const ContainerBg = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;

  @media screen and (max-width: 600px) {
    position: fixed;
    left: 0;
    top: 0;
  }
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (800px / 2));
  top: 60px;
  opacity: 1;

  @media screen and (max-width: 600px) {
    position: absolute;
    z-index: 5;
    left: 0;
    top: 55px;
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 800px;
  height: auto;
  padding: 20px 15px 57px 50px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 320px;
    height: 100vh;
    max-height: 800px;
    padding: 30px 20px 30px;
    border-radius: 0;
  }
`;

export const ModalHeading = styled.h3`
  ${HeadingH3}

  margin-bottom: 15px;

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

export const ModalScroll = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #d9d9d9 #ffffff; // Firefox
  scrollbar-width: thin; // Firefox

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 10px;
  }

  @media screen and (max-width: 600px) {
    padding-right: 22px;
  }
`;

export const ModalFormAddReview = styled.form`
  margin-top: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin-top: 22px;
  }
`;

export const FormAddReviewBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  & label {
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;
    color: #000000;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  & textarea {
    width: 652px;
    height: 100px;
    max-height: 100px;
    font-size: 16px;
    font-style: normal;
    line-height: 150%;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    resize: none;
    outline: none;
    padding: 10px 19px;

    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-size: 16px;
      line-height: 150%;
      color: #0000004d;
    }

    @media screen and (max-width: 600px) {
      font-family: 'Roboto', sans-serif;
      width: 100%;
      max-height: 107px;
      padding: 9px 17px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 30px;
      font-size: 16px;
      line-height: 1;

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
    margin-bottom: 16px;
  }
`;

export const CommentError = styled.p`
  color: coral;
  margin-top: 10px;
`;

export const FormButtonReviewPublish = styled.button`
  ${Button}

  width: 181px;
  height: 50px;
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  padding: 13px 37px;

  @media screen and (max-width: 600px) {
    margin-top: 0px;
    width: 100%;
    height: 46px;
    background-color: #009ee4;
  }
`;

export const Reviews = styled.div`
  width: 100%;
  height: 495px;
`;

export const Review = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 30px 0;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ReviewImgContainer = styled.div`
  margin-right: 12px;
`;

export const ReviewImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

export const ReviewContent = styled.div`
  display: block;
  width: 600px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
    max-width: 230px;
  }

  & p:not(:last-of-type) {
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    line-height: 200%;
    color: #000000;
  }

  & p:last-of-type {
    line-height: 150%;
  }
`;

export const ReviewAuthorName = styled.p`
  margin-bottom: 12px;

  & span {
    font-family: 'Noto Sans Regular', sans-serif;
    margin-left: 10px;
    color: #5f5f5f;
  }
`;
