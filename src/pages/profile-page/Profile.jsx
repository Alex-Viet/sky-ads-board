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
import { ChangePassword } from '../../components/modals/ChangePass';

export const Profile = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [typeError, setTypeError] = useState(null);
  const [changePassPopupOpen, setChangePassPopupOpen] = useState(false);

  const {
    data: userData = [],
    isLoading,
    isError,
    error,
  } = useGetCurrentUserQuery();
  const [editUserProfile] = useEditUserProfileMutation();
  const [uploadUserAvatar] = useUploadUserAvatarMutation();
  const {
    data = [],
    isLoading: adsLoading,
    isError: isAdsError,
    error: adsError,
  } = useGetUserAdsQuery();

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

  const handleBackBtn = (e) => {
    e.preventDefault();

    setIsFormChanged(false);
    setName(userData.name);
    setSurname(userData.surname);
    setCity(userData.city);
    setPhone(userData.phone);
    setEditMode(false);
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
                      <S.SettingsButton
                        onClick={() => setChangePassPopupOpen(true)}
                      >
                        Сменить пароль
                      </S.SettingsButton>
                      {changePassPopupOpen && (
                        <ChangePassword setPopupOpen={setChangePassPopupOpen} />
                      )}
                      <S.SettingsButton onClick={handleBackBtn}>
                        Назад
                      </S.SettingsButton>
                    </>
                  ) : (
                    <S.UserInfoContainer>
                      <p>
                        {userData.name} {userData.surname}
                      </p>
                      <p>{userData.city}</p>
                      <p>{userData.phone}</p>
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
