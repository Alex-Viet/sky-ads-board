import { Cards } from '../../components/cards/Cards';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Search } from '../../components/search/Search';
import * as S from './MainPage.styles';

export const MainPage = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Search />
        <S.MainContainer>
          <S.MainTitle>Объявления</S.MainTitle>
          <Cards />
        </S.MainContainer>
      </S.Main>
      <Footer />
    </>
  );
};
