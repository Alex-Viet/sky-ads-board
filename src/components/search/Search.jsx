import { useNavigate } from 'react-router-dom';
import * as S from './Search.styles';

export const Search = () => {
  const navigate = useNavigate();

  return (
    <S.MainSearch>
      <S.SearchLogoLink href="#" target="_blank">
        <S.SearchLogoImg src="/img/logo.png" alt="logo" />
      </S.SearchLogoLink>
      <S.SearchLogoMobLink href="#" target="_blank">
        <S.SearchLogoMobImg src="img/logo-mob.png" alt="logo" />
      </S.SearchLogoMobLink>
      <S.SearchBlock>
        <S.SearchText
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
        />
        <S.SearchTextMob type="search" placeholder="Поиск" name="search-mob" />
        <S.SearchButton>Найти</S.SearchButton>
        <S.GoMainPageButton
          onClick={() => {
            navigate('/');
          }}
        >
          Вернуться на главную
        </S.GoMainPageButton>
      </S.SearchBlock>
    </S.MainSearch>
  );
};
