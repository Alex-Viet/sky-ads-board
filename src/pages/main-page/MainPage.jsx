import { LoaderMarginContainer } from '../../App.styles';
import { Cards } from '../../components/cards/Cards';
import { Loader } from '../../components/loader/Loader';
import { useGetAdsQuery } from '../../services/ads';
import * as S from './MainPage.styles';

export const MainPage = () => {
  const { data = [], isLoading, isError, error } = useGetAdsQuery();

  return isLoading ? (
    <LoaderMarginContainer>
      <Loader />
    </LoaderMarginContainer>
  ) : isError ? (
    <h2>Ошибка: {error?.error}</h2>
  ) : (
    <>
      <S.MainTitle>Объявления</S.MainTitle>
      <Cards data={data} />
    </>
  );
};
