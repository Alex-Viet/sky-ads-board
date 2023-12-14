import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import * as S from './MainNav.styles';

export const MainNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { searchValue, search } = useSearch();

  return (
    <S.MainSearch>
      <Link to="/">
        <S.SearchLogoImg src="/img/logo.png" alt="logo" />
      </Link>
      <S.SearchLogoMobLink href="#">
        <S.SearchLogoMobImg src="img/logo-mob.png" alt="logo" />
      </S.SearchLogoMobLink>
      <S.SearchBlock>
        {pathname === '/' ? (
          <>
            <S.SearchText
              type="search"
              placeholder="Поиск по объявлениям"
              name="search"
              value={searchValue}
              onChange={(e) => search(e.target.value)}
            />
            <S.SearchTextMob
              type="search"
              placeholder="Поиск"
              name="search-mob"
            />
            <S.SearchButton>Найти</S.SearchButton>
          </>
        ) : (
          <S.GoMainPageButton
            onClick={() => {
              navigate('/');
            }}
          >
            Вернуться на главную
          </S.GoMainPageButton>
        )}
      </S.SearchBlock>
    </S.MainSearch>
  );
};
