import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Search } from '../../components/search/Search';
import './main.css';
import * as S from './MainPage.styles';

export const MainPage = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Search />
        <S.MainContainer>
          <S.MainTitle>Объявления</S.MainTitle>
          <S.MainContent>
            <S.Cards>
              <S.CardsItem>
                <S.Card>
                  <S.CardImg>
                    <a href="#" target="_blank">
                      <img src="#" alt="picture" />
                    </a>
                  </S.CardImg>
                  <S.CardContent>
                    <a href="#" target="_blank">
                      <S.CardTitle>
                        Ракетка для большого тенниса Triumph Pro ST
                      </S.CardTitle>
                    </a>
                    <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
                    <S.CardPlace>Санкт Петербург</S.CardPlace>
                    <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
                  </S.CardContent>
                </S.Card>
              </S.CardsItem>
            </S.Cards>
          </S.MainContent>
        </S.MainContainer>
      </S.Main>
      <Footer />
    </>
  );
};
