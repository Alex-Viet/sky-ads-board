import { Cards } from '../../components/cards/Cards';
import * as S from './Profile.styles';

export const Profile = () => {
  return (
    <S.MainContainer>
      <S.ProfileContainer>
        <S.ProfileTitle>Здравствуйте, Антон!</S.ProfileTitle>

        <S.Profile>
          <S.ProfileContent>
            <S.ProfileHeading>Настройки профиля</S.ProfileHeading>
            <S.ProfileSettings>
              <S.SettingsLeft>
                <S.SettingsImg>
                  <a href="#" target="_self">
                    <img src="#" alt="" />
                  </a>
                </S.SettingsImg>
                <S.SettingsChangeImg href="#" target="_self">
                  Заменить
                </S.SettingsChangeImg>
              </S.SettingsLeft>
              <S.SettingsRight>
                <S.SettingsForm>
                  <S.SettingsInputContainer>
                    <label htmlFor="fname">Имя</label>
                    <input name="fname" type="text" placeholder="Введите имя" />
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
              </S.SettingsRight>
            </S.ProfileSettings>
          </S.ProfileContent>
        </S.Profile>
      </S.ProfileContainer>
      <S.CardsContainer>
        <S.ProfileHeading>Мои товары</S.ProfileHeading>
        <Cards />
      </S.CardsContainer>
    </S.MainContainer>
  );
};
