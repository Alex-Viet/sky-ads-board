import * as S from './AdvPage.styles';

export const AdvPage = () => {
  return (
    <>
      <S.ArticleContainer>
        <S.Article>
          <S.ArticleMerryGoRound>
            <S.Carousel>
              <S.CarouselImg>
                <img src="#" alt="article" />
              </S.CarouselImg>
              <S.CarouselBar>
                <S.CarouselBarImg>
                  <img src="#" alt="article" />
                </S.CarouselBarImg>
                <S.CarouselBarImg>
                  <img src="#" alt="article" />
                </S.CarouselBarImg>
                <S.CarouselBarImg>
                  <img src="#" alt="article" />
                </S.CarouselBarImg>
                <S.CarouselBarImg>
                  <img src="#" alt="article" />
                </S.CarouselBarImg>
                <S.CarouselBarImg>
                  <img src="#" alt="article" />
                </S.CarouselBarImg>
              </S.CarouselBar>
              <S.CarouselBarMob>
                <div className="img-bar-mob__circle circle-active"></div>
                <div className="img-bar-mob__circle"></div>
                <div className="img-bar-mob__circle"></div>
                <div className="img-bar-mob__circle"></div>
                <div className="img-bar-mob__circle"></div>
              </S.CarouselBarMob>
            </S.Carousel>
          </S.ArticleMerryGoRound>
          <S.ArticleInfoContainer>
            <S.ArticleInfo>
              <S.ArticleHeading>
                Ракетка для большого тенниса Triumph Pro STC Б/У
              </S.ArticleHeading>
              <S.ArticleInfoText>
                <p>Сегодня в 10:45</p>
                <p>Санкт-Петербург</p>
                <a href="#">23 отзыва</a>
              </S.ArticleInfoText>
              <S.ArticlePrice>2 200 ₽</S.ArticlePrice>
              <S.ArticleButton>
                Показать&nbsp;телефон
                <span>8&nbsp;905&nbsp;XXX&nbsp;XX&nbsp;XX</span>
              </S.ArticleButton>
              <S.ArticleAuthor>
                <S.AuthorImg>
                  <img src="#" alt="" />
                </S.AuthorImg>
                <S.AuthorInfo>
                  <S.AuthorName>Кирилл</S.AuthorName>
                  <S.AuthorAbout>Продает товары с августа 2021</S.AuthorAbout>
                </S.AuthorInfo>
              </S.ArticleAuthor>
            </S.ArticleInfo>
          </S.ArticleInfoContainer>
        </S.Article>
      </S.ArticleContainer>

      <S.ArticleDescriptionContainer>
        <S.DescriptionHeading>Описание товара</S.DescriptionHeading>
        <S.Description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </S.Description>
      </S.ArticleDescriptionContainer>
    </>
  );
};
