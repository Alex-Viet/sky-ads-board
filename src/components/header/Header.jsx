import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './Header.styles';

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.isAuth);

  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderButton>Разместить объявление</S.HeaderButton>
        <S.HeaderButton
          onClick={() => {
            user ? navigate('/profile') : navigate('/auth');
          }}
        >
          {user ? 'Личный кабинет' : 'Вход в личный кабинет'}
        </S.HeaderButton>
      </S.HeaderNav>
    </S.Header>
  );
};
