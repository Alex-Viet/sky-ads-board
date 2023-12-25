import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { baseUrl } from '../../pages/adv-page/AdvPage';
import { formatDate } from '../../utils/getDate';
import * as S from './Cards.styles';

export const Cards = ({ data }) => {
  // Поиск
  const [filteredAds, setFilteredAds] = useState();
  const { searchValue } = useSearch();

  useEffect(() => {
    const searchFilter = data?.filter((ad) =>
      ad.title.toLowerCase().includes(searchValue),
    );

    setFilteredAds(searchValue ? searchFilter : data);
  }, [searchValue, data]);

  return (
    <S.MainContent>
      <S.Cards>
        {filteredAds?.map((ad) => (
          <S.CardsItem key={ad.id}>
            <S.Card>
              <S.CardImg>
                <Link to={`/ad/${ad.id}`}>
                  <img
                    src={
                      ad?.images[0]
                        ? baseUrl + ad.images[0].url
                        : '/img/nopic.png'
                    }
                    alt="picture"
                  />
                </Link>
              </S.CardImg>
              <S.CardContent>
                <Link to={`/ad/${ad.id}`}>
                  <S.CardTitle>{ad.title}</S.CardTitle>
                </Link>
                <S.CardPrice>{ad.price.toLocaleString('ru')} ₽</S.CardPrice>
                <S.CardPlace>{ad.user.city}</S.CardPlace>
                <S.CardDate>{formatDate(ad.created_on)}</S.CardDate>
              </S.CardContent>
            </S.Card>
          </S.CardsItem>
        ))}
      </S.Cards>
    </S.MainContent>
  );
};
