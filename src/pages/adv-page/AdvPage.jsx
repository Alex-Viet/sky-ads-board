import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { ShowPhoneNumButton } from '../../components/phone-num-button/ShowPhoneNumButton';
import { useGetAdsQuery } from '../../services/ads';
import { formatDate } from '../../utils/getDate';
import * as S from './AdvPage.styles';

export const baseUrl = 'http://127.0.0.1:8090/';

export const AdvPage = () => {
  const myAd = false;
  const { id } = useParams();
  const { data = [], isLoading, isError, error } = useGetAdsQuery();
  const actualAd = data.find((el) => el.id === Number(id));

  const [actualImg, setActualImg] = useState(null);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h2>Ошибка: {error?.error}</h2>
      ) : (
        <>
          <S.ArticleContainer>
            <S.Article>
              <S.ArticleMerryGoRound>
                <S.Carousel>
                  <S.CarouselImg>
                    <img
                      src={
                        !actualImg
                          ? actualAd?.images[0]
                            ? baseUrl + actualAd.images[0].url
                            : '/img/nopic.png'
                          : actualAd?.images[0]
                            ? baseUrl + actualImg
                            : '/img/nopic.png'
                      }
                    />
                  </S.CarouselImg>
                  <S.CarouselBar>
                    {actualAd?.images.map((image) => (
                      <S.CarouselBarImg
                        key={image.id}
                        onClick={() => setActualImg(image.url)}
                      >
                        <img
                          src={
                            actualAd?.images[0]
                              ? baseUrl + image.url
                              : '/img/nopic.png'
                          }
                          alt=""
                        />
                      </S.CarouselBarImg>
                    ))}
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
                  <S.ArticleHeading>{actualAd?.title}</S.ArticleHeading>
                  <S.ArticleInfoText>
                    <p>{formatDate(actualAd?.created_on)}</p>
                    <p>{actualAd?.user.city}</p>
                    <a href="#">23 отзыва</a>
                  </S.ArticleInfoText>
                  <S.ArticlePrice>
                    {actualAd?.price?.toLocaleString('ru')} ₽
                  </S.ArticlePrice>
                  {!myAd && <ShowPhoneNumButton phone={actualAd?.user.phone} />}
                  {myAd && (
                    <S.ButtonsContainer>
                      <S.ArticleButton>Редактировать</S.ArticleButton>
                      <S.ArticleButton>Снять с публикации</S.ArticleButton>
                    </S.ButtonsContainer>
                  )}

                  <S.ArticleAuthor>
                    <S.AuthorImg>
                      {actualAd?.user?.avatar && (
                        <img src={baseUrl + actualAd.user.avatar} alt="" />
                      )}
                    </S.AuthorImg>
                    <S.AuthorInfo>
                      <S.AuthorName>{actualAd?.user?.name}</S.AuthorName>
                      <S.AuthorAbout>
                        Продает товары с{' '}
                        {formatDate(actualAd?.user?.sells_from)}
                      </S.AuthorAbout>
                    </S.AuthorInfo>
                  </S.ArticleAuthor>
                </S.ArticleInfo>
              </S.ArticleInfoContainer>
            </S.Article>
          </S.ArticleContainer>

          <S.ArticleDescriptionContainer>
            <S.DescriptionHeading>Описание товара</S.DescriptionHeading>
            <S.Description>
              {actualAd?.description ? (
                <p>{actualAd.description}</p>
              ) : (
                <p>Описание товара отсутствует</p>
              )}
            </S.Description>
          </S.ArticleDescriptionContainer>
        </>
      )}
    </>
  );
};
