import styled from 'styled-components';
import { Button } from '../../App.styles';
import { TitleH2 } from '../../App.styles';
import { HeadingH3 } from '../../App.styles';

export const ProfileContainer = styled.div``;

export const ProfileTitle = styled.h2`
  ${TitleH2}

  margin-bottom: 10px;
`;

export const Profile = styled.div`
  width: 100%;
`;

export const ProfileContent = styled.div`
  max-width: 834px;
`;

export const ProfileHeading = styled.h3`
  ${HeadingH3}

  margin-bottom: 20px;
`;

export const ProfileSettings = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
`;

export const SettingsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 47px;
`;

export const SettingsAvatar = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;

  & img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

export const SettingsChangeAvatar = styled.a`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`;

export const SettingsRight = styled.div`
  width: 630px;
`;

export const SettingsForm = styled.form`
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
`;

export const SettingsInputContainer = styled.div`
  display: inline-block;
  margin: 0 7px 25px;

  &:last-of-type {
    input {
      width: 614px;
    }
  }
`;

export const SettingsButton = styled.button`
  ${Button}

  width: 154px;
  height: 50px;
  font-size: 16px;
  line-height: 1;
  margin: 10px 7px 0;
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
