import { Cards } from '../../components/cards/Cards';
import { useGetAdsQuery } from '../../services/ads';
import * as S from './MainPage.styles';

export const MainPage = () => {
  const { data = [] } = useGetAdsQuery();
  console.log(data);

  return (
    <>
      <S.MainTitle>Объявления</S.MainTitle>
      <Cards />
    </>
  );
};
