import { useNavigate } from 'react-router-dom';
import * as S from './Header.styles';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderButton>Разместить объявление</S.HeaderButton>
        <S.HeaderButton
          onClick={() => {
            navigate('/auth');
          }}
        >
          Вход в личный кабинет/Личный кабинет
        </S.HeaderButton>
      </S.HeaderNav>
    </S.Header>
  );
};
