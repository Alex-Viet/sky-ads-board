import styled from 'styled-components';
import { Button } from '../../App.styles';

export const MainSearch = styled.div`
  max-width: 1178px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 10px;

  @media screen and (max-width: 590px) {
    width: 100%;
    height: 55px;
    background-color: #009ee4;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    margin-bottom: 0px;
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
`;

export const SearchLogoImg = styled.img`
  width: 54px;
  height: auto;

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const SearchLogoMobLink = styled.a`
  display: none;

  @media screen and (max-width: 590px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const SearchLogoMobImg = styled.img`
  @media screen and (max-width: 590px) {
    width: 32px;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

export const SearchBlock = styled.div`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 590px) {
    margin-left: 10px;
    max-width: 1044px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const SearchText = styled.input`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const SearchTextMob = styled.input`
  display: none;

  @media screen and (max-width: 590px) {
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;

    background-color: #ffffff;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;

    &::placeholder {
      background-color: transparent;
      color: #b3b3b3;
      font-style: normal;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const SearchButton = styled.button`
  ${Button}

  width: 158px;
  height: 50px;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const GoMainPageButton = styled.button`
  ${Button}

  width: 241px;
  height: 50px;
  font-size: 16px;
  line-height: 150%;

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const HeaderLogoutImg = styled.img`
  display: none;

  @media screen and (max-width: 590px) {
    display: inline-block;
    width: 32px;
    height: 32px;
    background-color: inherit;
  }
`;
