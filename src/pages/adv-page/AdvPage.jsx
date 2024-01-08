import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LoaderMarginContainer } from '../../App.styles';
import { Loader } from '../../components/loader/Loader';
import { AddNewAd } from '../../components/modals/AddNewAd';
import { Reviews } from '../../components/modals/Reviews';
import { ShowPhoneNumButton } from '../../components/phone-num-button/ShowPhoneNumButton';
import {
  useDeleteAdMutation,
  useGetAdCommentsQuery,
  useGetAdsQuery,
  useGetCurrentUserQuery,
} from '../../services/ads';
import { declOfWord } from '../../utils/declensionOfCases';
import { formatDate } from '../../utils/getDate';
import * as S from './AdvPage.styles';

export const baseUrl = 'http://127.0.0.1:8090/';

export const AdvPage = () => {
  const { id } = useParams();
  const { data = [], isLoading, isError, error } = useGetAdsQuery();
  const actualAd = data.find((el) => el.id === Number(id));

  const [actualImg, setActualImg] = useState(null);

  const user = useSelector((state) => state.auth.isAuth);

  const { data: currentUser = [] } = useGetCurrentUserQuery();
  const currentUserAd = currentUser?.id === actualAd?.user_id;

  const [isEditModePopup, setEditModePopup] = useState(false);

  const [deleteAd] = useDeleteAdMutation(id);
  const navigate = useNavigate();

  const deleteAdHandler = async (evt) => {
    evt.preventDefault();

    await deleteAd(id).unwrap();
    navigate('/profile');
  };

  // отзывы
  const [isCommentsPopupOpen, setCommentsPopupOpen] = useState(false);
  const { data: comments } = useGetAdCommentsQuery(id);

  return (
    <>
      {isLoading ? (
        <LoaderMarginContainer>
          <Loader />
        </LoaderMarginContainer>
      ) : isError ? (
        <h2>Ошибка: {error?.error}</h2>
      ) : (
        <>
          {isEditModePopup && (
            <AddNewAd
              isEditMode={isEditModePopup}
              setPopupOpen={setEditModePopup}
              actualAd={actualAd}
            />
          )}
          {isCommentsPopupOpen && (
            <Reviews setPopupOpen={setCommentsPopupOpen} id={id} />
          )}
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
                    <a onClick={() => setCommentsPopupOpen(true)}>
                      {comments?.length} {declOfWord(comments?.length)}
                    </a>
                  </S.ArticleInfoText>
                  <S.ArticlePrice>
                    {actualAd?.price?.toLocaleString('ru')} ₽
                  </S.ArticlePrice>
                  {user && currentUserAd ? (
                    <S.ButtonsContainer>
                      <S.ArticleButton onClick={() => setEditModePopup(true)}>
                        Редактировать
                      </S.ArticleButton>
                      <S.ArticleButton onClick={deleteAdHandler}>
                        Снять с публикации
                      </S.ArticleButton>
                    </S.ButtonsContainer>
                  ) : (
                    <ShowPhoneNumButton phone={actualAd?.user.phone} />
                  )}

                  <S.ArticleAuthor>
                    <S.AuthorImg>
                      {actualAd?.user?.avatar && (
                        <img src={baseUrl + actualAd.user.avatar} alt="" />
                      )}
                    </S.AuthorImg>
                    <S.AuthorInfo>
                      <Link to={`/seller-profile/${actualAd?.user_id}`}>
                        <S.AuthorName>{actualAd?.user?.name}</S.AuthorName>
                      </Link>
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
