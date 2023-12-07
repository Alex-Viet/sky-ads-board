import styled from 'styled-components';
import { Button } from '../../App.styles';

export const MainSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
`;

export const SearchLogoLink = styled.a``;

export const SearchLogoImg = styled.img`
  width: 54px;
  height: auto;
`;

export const SearchLogoMobLink = styled.a`
  display: none;
`;

export const SearchLogoMobImg = styled.img``;

export const SearchForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
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
`;

export const SearchTextMob = styled.input`
  display: none;
`;

export const SearchButton = styled.button`
  ${Button}

  width: 158px;
  height: 50px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #009ee4;
  margin-left: 10px;
`;
