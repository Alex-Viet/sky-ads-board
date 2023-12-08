import { Cards } from '../../components/cards/Cards';
import * as S from './MainPage.styles';

export const MainPage = () => {
  return (
    <S.MainContainer>
      <S.MainTitle>Объявления</S.MainTitle>
      <Cards />
    </S.MainContainer>
  );
};
