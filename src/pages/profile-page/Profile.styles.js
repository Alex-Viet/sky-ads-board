import styled from 'styled-components';
import { Button } from '../../App.styles';
import { TitleH2 } from '../../App.styles';
import { HeadingH3 } from '../../App.styles';

export const ProfileContainer = styled.div``;

export const ProfileTitle = styled.h2`
  ${TitleH2}

  margin-bottom: 10px;

  @media screen and (max-width: 890px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin: 30px 0 20px 0;
  }
`;

export const Profile = styled.div`
  width: 100%;
`;

export const ProfileContent = styled.div`
  max-width: 834px;

  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`;

export const ProfileHeading = styled.h3`
  ${HeadingH3}

  margin-bottom: 20px;

  @media screen and (max-width: 890px) {
    margin-bottom: 0;
  }
`;

export const ProfileSettings = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 890px) {
    flex-wrap: wrap;
  }
`;

export const SettingsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 47px;

  @media screen and (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    order: 2;
  }
`;

export const SettingsAvatar = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: inherit;
  }

  @media screen and (max-width: 620px) {
    width: 132px;
    height: 132px;
    margin-top: 30px;
  }
`;

export const SettingsChangeAvatarLabel = styled.label`
  position: relative;
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
  cursor: pointer;
  margin: 10px 0 30px 0;

  &:hover {
    color: #ff6163;
  }

  & input {
    width: 2px;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

export const SettingsRight = styled.div`
  width: 630px;

  @media screen and (max-width: 620px) {
    width: 100%;
    order: 1;
  }
`;

export const SettingsForm = styled.div`
  width: 630px;
  display: flex;
  flex-wrap: wrap;

  & input {
    width: 300px;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;

    &::placeholder {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.3);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }

  & label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #c4c4c4;
    margin-bottom: 4px;
    display: block;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    & input {
      border-radius: 30px;
      padding: 9px 17px;

      &::placeholder {
        font-size: 14px;
        line-height: 21px;
      }
    }

    & label {
      font-size: 14px;
      line-height: 21px;
      color: #c4c4c4;
      margin-bottom: 6px;
    }
  }
`;

export const SettingsInputContainer = styled.div`
  display: inline-block;
  margin: 0 0 25px;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:last-of-type {
    input {
      width: 614px;
      -moz-appearance: textfield;

      @media screen and (max-width: 620px) {
        width: 300px;
      }
    }
  }
`;

export const ErrorText = styled.h3`
  color: coral;
  margin-top: 20px;
`;

export const SettingsButton = styled.button`
  ${Button}

  width: 154px;
  height: 50px;
  font-size: 16px;
  line-height: 1;
  margin: 10px 7px 0;
  background-color: ${(props) => (props.$disabled ? '#afb3ba' : '')};

  &:hover {
    background-color: ${(props) => (props.$disabled ? '#afb3ba' : '')};
  }

  @media screen and (max-width: 620px) {
    font-size: 16px;
    line-height: 1;
    width: 300px;
    height: 46px;
    margin: 8px 0px 0;
  }
`;

export const CardsContainer = styled.div`
  margin-top: 70px;
`;

export const SellerInfoContainer = styled.div`
  & p {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 10px;
    font-family: 'Noto Sans Regular', sans-serif;
  }

  & p:first-of-type {
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    color: #000000;
  }

  & p:last-of-type {
    margin-bottom: 30px;
  }
`;

export const UserInfoContainer = styled(SellerInfoContainer)`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
`;

export const TypeErrorText = styled.h3`
  color: red;
  margin-bottom: 20px;
`;
