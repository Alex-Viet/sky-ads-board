import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 590px) {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    right: 0;
    left: 0;
    top: 134px;
    bottom: 84px;
  }
`;

export const Cards = styled.div`
  --grid-gap: 40px 26px;

  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-gap: var(--grid-gap);
  justify-content: center;
  padding-top: 30px;

  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e; // Firefox
  scrollbar-width: thin; // Firefox
  scrollbar-width: 0px; // Firefox

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }

  @media screen and (max-width: 1226px) {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }

  @media screen and (max-width: 930px) {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }

  @media screen and (max-width: 590px) {
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
  }
`;

export const CardsItem = styled.div`
  @media screen and (max-width: 590px) {
    margin: 0;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`;

export const Card = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 590px) {
    width: 137px;
    height: 293px;
    display: flex;
    flex-direction: column;
  }
`;

export const CardImg = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  border: 1px solid #f0f0f0;
  transition: all 0.5s linear;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;

    @media screen and (max-width: 590px) {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px #4b4848;
  }

  @media screen and (max-width: 590px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;
  }
`;

export const CardContent = styled.div`
  @media screen and (max-width: 590px) {
    margin-left: 10px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  line-height: 120%;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s ease-out;

  &:hover {
    color: #ff6163;
  }

  @media screen and (max-width: 590px) {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const CardPrice = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  margin-bottom: 10px;

  @media screen and (max-width: 590px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const TextMixin = css`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;

  @media screen and (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
    color: #5f5f5f;
  }
`;

export const CardPlace = styled.p`
  ${TextMixin}

  margin-bottom: 4px;

  @media screen and (max-width: 590px) {
  }
`;

export const CardDate = styled.p`
  ${TextMixin}

  @media screen and (max-width: 590px) {
  }
`;
