import { Cards } from '../../components/cards/Cards';
import { useGetAdsQuery } from '../../services/ads';

import * as S from './MainPage.styles';

export const MainPage = () => {
  const { data = [], isLoading, isError } = useGetAdsQuery();

  return (
    <>
      <S.MainTitle>Объявления</S.MainTitle>
      <Cards data={data} />
    </>
  );
};
