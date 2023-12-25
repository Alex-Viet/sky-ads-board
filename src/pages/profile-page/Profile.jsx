import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoaderMarginContainer } from '../../App.styles';
import { Cards } from '../../components/cards/Cards';
import { Loader } from '../../components/loader/Loader';
import { ShowPhoneNumButton } from '../../components/phone-num-button/ShowPhoneNumButton';
import {
  useGetCurrentUserQuery,
  useEditUserProfileMutation,
} from '../../services/users';
import { formatDate } from '../../utils/getDate';
import { baseUrl } from '../adv-page/AdvPage';
import * as S from './Profile.styles';

export const Profile = ({ data, isLoading, isError, error, sellerData }) => {
  const [isSellerProfile, setSellerProfile] = useState(false);
  const [isEditMode, setEditMode] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    pathname.includes('seller')
      ? setSellerProfile(true)
      : setSellerProfile(false);
  }, []);

  const { data: userData = [], isLoading: loading } = useGetCurrentUserQuery();
  const [editUserProfile] = useEditUserProfileMutation();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  if (!isSellerProfile) {
    useEffect(() => {
      if (userData) {
        setName(userData.name);
        setSurname(userData.surname);
        setCity(userData.city);
        setPhone(userData.phone);
      }
    }, [userData]);
  }

  const handleEditModeBtn = () => {
    setEditMode(true);
  };

  const handleSaveChanges = async (evt) => {
    evt.preventDefault();

    await editUserProfile({
      name,
      surname,
      city,
      phone,
    })
      .unwrap()
      .then((userData) => {
        console.log(userData);

        setName(userData.name);
        setSurname(userData.surname);
        setCity(userData.city);
        setPhone(userData.phone);
      });

    setEditMode(false);
  };

  return isLoading ? (
    <LoaderMarginContainer>
      <Loader />
    </LoaderMarginContainer>
  ) : (
    <>
      <S.ProfileContainer>
        <S.ProfileTitle>
          {isSellerProfile
            ? 'Профиль продавца'
            : `Здравствуйте, ${userData?.name}!`}
        </S.ProfileTitle>

        <S.Profile>
          <S.ProfileContent>
            {!isSellerProfile && (
              <S.ProfileHeading>Настройки профиля</S.ProfileHeading>
            )}
            <S.ProfileSettings>
              <S.SettingsLeft>
                <S.SettingsAvatar>
                  {sellerData?.avatar && (
                    <img src={baseUrl + sellerData.avatar} alt="" />
                  )}
                </S.SettingsAvatar>
                {!isSellerProfile && (
                  <S.SettingsChangeAvatar href="#" target="_self">
                    Заменить
                  </S.SettingsChangeAvatar>
                )}
              </S.SettingsLeft>
              <S.SettingsRight>
                {!isSellerProfile && !loading && (
                  <S.SettingsForm>
                    {isEditMode ? (
                      <>
                        <S.SettingsInputContainer>
                          <label htmlFor="fname">Имя</label>
                          <input
                            name="fname"
                            type="text"
                            placeholder="Введите имя"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </S.SettingsInputContainer>

                        <S.SettingsInputContainer>
                          <label htmlFor="lname">Фамилия</label>
                          <input
                            name="lname"
                            type="text"
                            placeholder="Введите фамилию"
                            defaultValue={surname}
                            onChange={(e) => setSurname(e.target.value)}
                          />
                        </S.SettingsInputContainer>

                        <S.SettingsInputContainer>
                          <label htmlFor="city">Город</label>
                          <input
                            name="city"
                            type="text"
                            placeholder="Введите город"
                            defaultValue={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </S.SettingsInputContainer>

                        <S.SettingsInputContainer>
                          <label htmlFor="phone">Телефон</label>
                          <input
                            name="phone"
                            type="tel"
                            placeholder="Введите номер телефона"
                            defaultValue={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </S.SettingsInputContainer>

                        <S.SettingsButton onClick={handleSaveChanges}>
                          Сохранить
                        </S.SettingsButton>
                      </>
                    ) : (
                      <S.UserInfoContainer>
                        <p>
                          {name} {surname}
                        </p>
                        <p>{city}</p>
                        <p>{phone}</p>
                        <S.SettingsButton onClick={handleEditModeBtn}>
                          Редактировать
                        </S.SettingsButton>
                      </S.UserInfoContainer>
                    )}
                  </S.SettingsForm>
                )}
                {isSellerProfile && (
                  <S.SellerInfoContainer>
                    <p>{sellerData?.name}</p>
                    <p>{sellerData?.city}</p>
                    <p>Продает товары с {formatDate(sellerData?.sells_from)}</p>

                    <div className="seller__img-mob-block">
                      <div
                        className="seller__img-mob"
                        style={{ display: 'none' }}
                      >
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>

                      <ShowPhoneNumButton phone={sellerData?.phone} />
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
