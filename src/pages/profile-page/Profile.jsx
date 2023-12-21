import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { LoaderMarginContainer } from '../../App.styles';
import { Cards } from '../../components/cards/Cards';
import { Loader } from '../../components/loader/Loader';
import { ShowPhoneNumButton } from '../../components/phone-num-button/ShowPhoneNumButton';
import { useGetCurrentUserAdsQuery } from '../../services/ads';
import { formatDate } from '../../utils/getDate';
import { baseUrl } from '../adv-page/AdvPage';
import * as S from './Profile.styles';

export const Profile = () => {
  const [isSellerProfile, setSellerProfile] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    pathname.includes('seller')
      ? setSellerProfile(true)
      : setSellerProfile(false);
  }, []);

  const { id } = useParams();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useGetCurrentUserAdsQuery(id);

  const userData = data[0]?.user;

  return isLoading ? (
    <LoaderMarginContainer>
      <Loader />
    </LoaderMarginContainer>
  ) : isError ? (
    <h2>Ошибка: {error?.error}</h2>
  ) : (
    <>
      <S.ProfileContainer>
        <S.ProfileTitle>
          {isSellerProfile ? 'Профиль продавца' : 'Здравствуйте, Антон!'}
        </S.ProfileTitle>

        <S.Profile>
          <S.ProfileContent>
            {!isSellerProfile && (
              <S.ProfileHeading>Настройки профиля</S.ProfileHeading>
            )}
            <S.ProfileSettings>
              <S.SettingsLeft>
                <S.SettingsAvatar>
                  <a href="#" target="_self">
                    {userData?.avatar && (
                      <img src={baseUrl + userData.avatar} alt="" />
                    )}
                  </a>
                </S.SettingsAvatar>
                {!isSellerProfile && (
                  <S.SettingsChangeAvatar href="#" target="_self">
                    Заменить
                  </S.SettingsChangeAvatar>
                )}
              </S.SettingsLeft>
              <S.SettingsRight>
                {!isSellerProfile && (
                  <S.SettingsForm>
                    <S.SettingsInputContainer>
                      <label htmlFor="fname">Имя</label>
                      <input
                        name="fname"
                        type="text"
                        placeholder="Введите имя"
                      />
                    </S.SettingsInputContainer>

                    <S.SettingsInputContainer>
                      <label htmlFor="lname">Фамилия</label>
                      <input
                        name="lname"
                        type="text"
                        placeholder="Введите фамилию"
                      />
                    </S.SettingsInputContainer>

                    <S.SettingsInputContainer>
                      <label htmlFor="city">Город</label>
                      <input
                        name="city"
                        type="text"
                        placeholder="Введите город"
                      />
                    </S.SettingsInputContainer>

                    <S.SettingsInputContainer>
                      <label htmlFor="phone">Телефон</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Введите номер телефона"
                      />
                    </S.SettingsInputContainer>

                    <S.SettingsButton>Сохранить</S.SettingsButton>
                  </S.SettingsForm>
                )}
                {isSellerProfile && (
                  <S.SellerInfoContainer>
                    <p>{userData?.name}</p>
                    <p>{userData?.city}</p>
                    <p>Продает товары с {formatDate(userData?.sells_from)}</p>

                    <div className="seller__img-mob-block">
                      <div
                        className="seller__img-mob"
                        style={{ display: 'none' }}
                      >
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>

                      <ShowPhoneNumButton phone={userData?.phone} />
                    </div>
                  </S.SellerInfoContainer>
                )}
              </S.SettingsRight>
            </S.ProfileSettings>
          </S.ProfileContent>
        </S.Profile>
      </S.ProfileContainer>
      <S.CardsContainer>
        <S.ProfileHeading>
          {isSellerProfile ? 'Товары продавца' : 'Мои товары'}
        </S.ProfileHeading>
        <Cards data={data} isError={isError} error={error} />
      </S.CardsContainer>
    </>
  );
};
