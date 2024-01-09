import { useEffect } from 'react';
import { useState } from 'react';
import { LoaderMarginContainer } from '../../App.styles';
import { Cards } from '../../components/cards/Cards';
import { Loader } from '../../components/loader/Loader';
import {
  useGetCurrentUserQuery,
  useEditUserProfileMutation,
  useUploadUserAvatarMutation,
  useGetUserAdsQuery,
} from '../../services/ads';
import { baseUrl } from '../../utils/url';
import * as S from './Profile.styles';

export const Profile = () => {
  const [isEditMode, setEditMode] = useState(false);

  const {
    data: userData = [],
    isLoading,
    isError,
    error,
  } = useGetCurrentUserQuery();
  const [editUserProfile] = useEditUserProfileMutation();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value.trim());
    setIsFormChanged(true);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value.trim());
    setIsFormChanged(true);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value.trim());
    setIsFormChanged(true);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value.trim());
    setIsFormChanged(true);
  };

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setSurname(userData.surname);
      setCity(userData.city);
      setPhone(userData.phone);
    }
    setIsFormChanged(false);
  }, [userData]);

  const handleEditModeBtn = () => {
    setEditMode(true);
  };

  // редактирование профиля
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
        setName(userData.name);
        setSurname(userData.surname);
        setCity(userData.city);
        setPhone(userData.phone);
      });

    setIsFormChanged(false);
    setEditMode(false);
  };

  const {
    data = [],
    isLoading: adsLoading,
    isError: isAdsError,
    error: adsError,
  } = useGetUserAdsQuery();

  const [typeError, setTypeError] = useState(null);

  const [uploadUserAvatar] = useUploadUserAvatarMutation();

  // загрузить аватар
  const uploadAvatar = async (evt) => {
    evt.preventDefault();

    const file = evt.target.files[0];
    if (!file?.type?.startsWith('image/')) {
      setTypeError('Неправильный формат изображения');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    await uploadUserAvatar(formData).unwrap();
    setTypeError(null);
  };

  return isLoading ? (
    <LoaderMarginContainer>
      <Loader />
    </LoaderMarginContainer>
  ) : isError ? (
    <h2>Ошибка: {error?.error}</h2>
  ) : (
    <>
      <S.ProfileContainer>
        <S.ProfileTitle>Здравствуйте, {userData?.name}!</S.ProfileTitle>

        <S.Profile>
          <S.ProfileContent>
            <S.ProfileHeading>Настройки профиля</S.ProfileHeading>
            {typeError && <S.TypeErrorText>{typeError}</S.TypeErrorText>}
            <S.ProfileSettings>
              <S.SettingsLeft>
                <S.SettingsAvatar>
                  {userData?.avatar && (
                    <img src={baseUrl + userData.avatar} alt="" />
                  )}
                </S.SettingsAvatar>
                {isEditMode && (
                  <S.SettingsChangeAvatarLabel
                    htmlFor="avatar"
                    onChange={uploadAvatar}
                  >
                    Заменить
                    <input id="avatar" type="file" accept="image/*" />
                  </S.SettingsChangeAvatarLabel>
                )}
              </S.SettingsLeft>
              <S.SettingsRight>
                <S.SettingsForm>
                  {isEditMode ? (
                    <>
                      <S.SettingsInputContainer>
                        <label htmlFor="name">Имя</label>
                        <input
                          name="name"
                          type="text"
                          placeholder="Введите имя"
                          defaultValue={name}
                          onChange={handleNameChange}
                        />
                      </S.SettingsInputContainer>

                      <S.SettingsInputContainer>
                        <label htmlFor="surname">Фамилия</label>
                        <input
                          name="surname"
                          type="text"
                          placeholder="Введите фамилию"
                          defaultValue={surname}
                          onChange={handleSurnameChange}
                        />
                      </S.SettingsInputContainer>

                      <S.SettingsInputContainer>
                        <label htmlFor="city">Город</label>
                        <input
                          name="city"
                          type="text"
                          placeholder="Введите город"
                          defaultValue={city}
                          onChange={handleCityChange}
                        />
                      </S.SettingsInputContainer>

                      <S.SettingsInputContainer>
                        <label htmlFor="phone">Телефон</label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="Введите номер телефона"
                          defaultValue={phone}
                          onChange={handlePhoneChange}
                        />
                      </S.SettingsInputContainer>

                      <S.SettingsButton
                        disabled={!isFormChanged}
                        $disabled={!isFormChanged}
                        onClick={handleSaveChanges}
                      >
                        Сохранить
                      </S.SettingsButton>
                      <S.SettingsButton onClick={() => setEditMode(false)}>
                        Назад
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
              </S.SettingsRight>
            </S.ProfileSettings>
          </S.ProfileContent>
        </S.Profile>
      </S.ProfileContainer>
      <S.CardsContainer>
        <S.ProfileHeading>Мои товары</S.ProfileHeading>
        {isAdsError ? (
          <h2>Ошибка: {adsError}</h2>
        ) : (
          !adsLoading && <Cards data={data} />
        )}
      </S.CardsContainer>
    </>
  );
};
