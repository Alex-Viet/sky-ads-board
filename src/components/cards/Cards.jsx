import { Link } from 'react-router-dom';
import * as S from './Cards.styles';

export const Cards = () => {
  return (
    <S.MainContent>
      <S.Cards>
        <S.CardsItem>
          <S.Card>
            <S.CardImg>
              <Link to="/ad">
                <img src="#" alt="picture" />
              </Link>
            </S.CardImg>
            <S.CardContent>
              <Link to="/ad">
                <S.CardTitle>
                  Ракетка для большого тенниса Triumph Pro ST
                </S.CardTitle>
              </Link>
              <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
              <S.CardPlace>Санкт Петербург</S.CardPlace>
              <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
            </S.CardContent>
          </S.Card>
        </S.CardsItem>
      </S.Cards>
    </S.MainContent>
  );
};
