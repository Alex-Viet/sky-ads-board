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

export const SearchBlock = styled.div`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: flex;
  gap: 10px;
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
`;

export const GoMainPageButton = styled.button`
  ${Button}

  width: 241px;
  height: 50px;
  font-size: 16px;
  line-height: 150%;
`;
