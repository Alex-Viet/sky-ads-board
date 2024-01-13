import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import * as S from './MainNav.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../store/slices/authSlice';

export const MainNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { searchValue, search } = useSearch();
  const user = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(
      setAuth({
        email: null,
        access: null,
        refresh: null,
        isAuth: false,
      }),
    );
    localStorage.clear();
  };

  return (
    <S.MainSearch>
      <Link to="/">
        <S.SearchLogoImg src="/img/logo.png" alt="logo" />
        <S.SearchLogoMobLink>
          <S.SearchLogoMobImg src="/img/logo-mob.png" alt="logo" />
        </S.SearchLogoMobLink>
      </Link>
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
            {user ? (
              <S.HeaderLogoutImg src="/img/icons/logout.png" onClick={logout} />
            ) : (
              <S.HeaderLogoutImg
                src="/img/icons/login.png"
                onClick={() => {
                  navigate('/auth');
                }}
              />
            )}
          </>
        ) : (
          <>
            <S.GoMainPageButton
              onClick={() => {
                navigate('/');
              }}
            >
              Вернуться на главную
            </S.GoMainPageButton>
            {user ? (
              <S.HeaderLogoutImg src="/img/icons/logout.png" onClick={logout} />
            ) : (
              <S.HeaderLogoutImg
                src="/img/icons/login.png"
                onClick={() => {
                  navigate('/auth');
                }}
              />
            )}
          </>
        )}
      </S.SearchBlock>
    </S.MainSearch>
  );
};
