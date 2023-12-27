import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../store/slices/authSlice';
import { AddNewAd } from '../modals/AddNewAd';
import * as S from './Header.styles';

export const Header = () => {
  const navigate = useNavigate();
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

  const [isAddNewAdPopupOpen, setAddNewAdPopupOpen] = useState(false);

  return (
    <S.Header>
      <S.HeaderNav>
        {user && (
          <S.HeaderButton onClick={() => setAddNewAdPopupOpen(true)}>
            Разместить объявление
          </S.HeaderButton>
        )}
        <S.HeaderButton
          onClick={() => {
            user ? navigate('/profile') : navigate('/auth');
          }}
        >
          {user ? 'Личный кабинет' : 'Вход в личный кабинет'}
        </S.HeaderButton>
        {user && <S.HeaderButton onClick={logout}>Выйти</S.HeaderButton>}
      </S.HeaderNav>
      {isAddNewAdPopupOpen && (
        <AddNewAd setAddNewAdPopupOpen={setAddNewAdPopupOpen} />
      )}
    </S.Header>
  );
};
