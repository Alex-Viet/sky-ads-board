import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderButton id="btnMainEnter">Разместить объявление</S.HeaderButton>
        <S.HeaderButton id="btnMainEnter">
          Вход в личный кабинет/Личный кабинет
        </S.HeaderButton>
      </S.HeaderNav>
    </S.Header>
  );
};
