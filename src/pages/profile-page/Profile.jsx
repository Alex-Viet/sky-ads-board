import { Cards } from '../../components/cards/Cards';
import { ShowPhoneNumButton } from '../../components/phone-num-button/ShowPhoneNumButton';
import * as S from './Profile.styles';

export const Profile = () => {
  const seller = false;
  return (
    <>
      <S.ProfileContainer>
        <S.ProfileTitle>
          {seller ? 'Профиль продавца' : 'Здравствуйте, Антон!'}
        </S.ProfileTitle>

        <S.Profile>
          <S.ProfileContent>
            {!seller && <S.ProfileHeading>Настройки профиля</S.ProfileHeading>}
            <S.ProfileSettings>
              <S.SettingsLeft>
                <S.SettingsAvatar>
                  <a href="#" target="_self">
                    <img src="#" alt="" />
                  </a>
                </S.SettingsAvatar>
                {!seller && (
                  <S.SettingsChangeAvatar href="#" target="_self">
                    Заменить
                  </S.SettingsChangeAvatar>
                )}
              </S.SettingsLeft>
              <S.SettingsRight>
                {!seller && (
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
                {seller && (
                  <S.SellerInfoContainer>
                    <p>Кирилл Матвеев</p>
                    <p>Санкт-Петербург</p>
                    <p>Продает товары с августа 2021</p>

                    <div className="seller__img-mob-block">
                      <div
                        className="seller__img-mob"
                        style={{ display: 'none' }}
                      >
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>

                      <ShowPhoneNumButton />
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
          {seller ? 'Товары продавца' : 'Мои товары'}
        </S.ProfileHeading>
        <Cards />
      </S.CardsContainer>
    </>
  );
};
