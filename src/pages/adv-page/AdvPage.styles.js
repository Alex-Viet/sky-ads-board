import styled from 'styled-components';
import { HeadingH3, Button } from '../../App.styles';

export const ArticleContainer = styled.div`
  margin-top: 28px;

  @media screen and (max-width: 768px) {
    max-width: 1178px;
    width: 100%;
    padding: 0;
    margin: 0 auto;
  }
`;

export const Article = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ArticleMerryGoRound = styled.div`
  max-width: 480px;
  margin-right: 54px;

  @media screen and (max-width: 890px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;

export const BackBtn = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 12px;
    height: 23px;
    position: absolute;
    top: 20px;
    left: 34px;

    &::before {
      content: '';
      display: block;
      width: 23px;
      height: 23px;
      background-color: transparent;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
      transform: rotate(-45deg);
      position: absolute;
      cursor: pointer;
    }
  }
`;

export const CarouselImg = styled.div`
  width: 480px;
  height: 480px;
  margin: 0 5px;

  & img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 320px;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
  }
`;

export const CarouselBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CarouselBarImg = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const CarouselBarMob = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 68px;
    height: 8px;
    position: absolute;
    bottom: 120px;
    left: calc(50% - (68px / 2));
    display: flex;
    gap: 10px;
  }
`;

export const CarouselBarMobCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: ${(props) => (props.$active ? '#fff' : '')};
  cursor: pointer;

  &:active {
    background-color: ${(props) => (props.$active ? '#fff' : '')};
  }
`;

export const ArticleInfoContainer = styled.div`
  max-width: 621px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`;

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleHeading = styled.h3`
  ${HeadingH3}

  font-family: 'Noto Sans', sans-serif;
  line-height: 140%;
  margin-bottom: 10px;
`;

export const ArticleInfoText = styled.div`
  font-size: 16px;
  line-height: 130%;
  margin-bottom: 34px;

  & p {
    color: #5f5f5f;
    margin-bottom: 4px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 4px;
    }
  }

  & a {
    color: #009ee4;
    font-family: 'Noto Sans', sans-serif;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 19px;
      color: #009ee4;
    }
  }
`;

export const ArticlePrice = styled.p`
  color: #000;
  font-family: 'Noto Sans', sans-serif;
  font-size: 28px;
  font-style: normal;
  line-height: 140%;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export const ArticleAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: inherit;
  }
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  line-height: 130%;
  color: #009ee4;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
  }
`;

export const AuthorAbout = styled.p`
  font-family: 'Noto Sans Regular', sans-serif;
  font-size: 16px;
  line-height: 200%;
  color: #5f5f5f;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 28px;
  }
`;

export const ArticleDescriptionContainer = styled.div`
  margin-top: 62px;

  @media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
`;

export const DescriptionHeading = styled.h3`
  ${HeadingH3}

  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 14px;
    padding: 0;
  }
`;

export const Description = styled.div`
  max-width: 792px;
  width: 100%;

  & p {
    color: #000;
    font-size: 16px;
    line-height: 150%;

    @media screen and (max-width: 590px) {
      font-size: 14px;
      line-height: 150%;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 84px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ArticleButton = styled.button`
  ${Button}

  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  margin-right: 10px;
  padding: 13px 37px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;

    & span {
      font-size: 12px;
    }
  }
`;
