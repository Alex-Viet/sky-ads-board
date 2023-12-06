import styled, { css } from 'styled-components';

export const Main = styled.main``;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
`;

export const MainTitle = styled.h2`
  font-style: normal;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;

  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e; // Firefox
  scrollbar-width: thin; // Firefox
  scrollbar-width: 0px; // Firefox
  height: 922px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
`;

export const CardsItem = styled.div`
  margin: 0;
`;

export const Card = styled.div`
  width: 270px;
  height: 441px;
  display: flex;
  flex-direction: column;
`;

export const CardImg = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const CardContent = styled.div``;

export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
`;

export const TextMixin = css`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;

export const CardPlace = styled.p`
  ${TextMixin}

  margin-bottom: 4px;
`;

export const CardDate = styled.p`
  ${TextMixin}
`;
