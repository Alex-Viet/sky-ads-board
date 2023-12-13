import styled from 'styled-components';
import { HeadingH3, Button } from '../../App.styles';

export const ArticleContainer = styled.div`
  margin-top: 28px;
`;

export const Article = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ArticleMerryGoRound = styled.div`
  max-width: 480px;
  margin-right: 54px;
`;

export const Carousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
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
`;

export const CarouselBarImg = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const CarouselBarMob = styled.div`
  display: none;
`;

export const ArticleInfoContainer = styled.div`
  max-width: 621px;
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
  }

  & a {
    color: #009ee4;
    font-family: 'Noto Sans', sans-serif;
  }
`;

export const ArticlePrice = styled.p`
  color: #000;
  font-family: 'Noto Sans', sans-serif;
  font-size: 28px;
  font-style: normal;
  line-height: 140%;
  margin-bottom: 20px;
`;

export const ArticleAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
`;

export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;

  & img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  line-height: 130%;
  color: #009ee4;
`;

export const AuthorAbout = styled.p`
  font-family: 'Noto Sans Regular', sans-serif;
  font-size: 16px;
  line-height: 200%;
  color: #5f5f5f;
`;

export const ArticleDescriptionContainer = styled.div`
  margin-top: 62px;
`;

export const DescriptionHeading = styled.h3`
  ${HeadingH3}

  margin-bottom: 20px;
`;

export const Description = styled.div`
  max-width: 792px;
  width: 100%;

  & p {
    color: #000;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const ArticleButton = styled.button`
  ${Button}

  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  margin-right: 10px;
  padding: 13px 37px;
`;
