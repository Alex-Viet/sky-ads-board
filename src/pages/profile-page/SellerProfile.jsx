import { useParams } from 'react-router-dom';
import { LoaderMarginContainer } from '../../App.styles';
import { Cards } from '../../components/cards/Cards';
import { Loader } from '../../components/loader/Loader';
import { ShowPhoneNumButton } from '../../components/phone-num-button/ShowPhoneNumButton';
import { useGetCurrentUserAdsQuery } from '../../services/ads';
import { formatDate } from '../../utils/getDate';
import { baseUrl } from '../adv-page/AdvPage';
import * as S from './Profile.styles';

export const SellerProfile = () => {
  const { id } = useParams();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useGetCurrentUserAdsQuery(id);

  const sellerData = data[0]?.user;

  return isLoading ? (
    <LoaderMarginContainer>
      <Loader />
    </LoaderMarginContainer>
  ) : isError ? (
    <h2>Ошибка: {error?.error}</h2>
  ) : (
    <>
      <S.ProfileContainer>
        <S.ProfileTitle>Профиль продавца</S.ProfileTitle>

        <S.Profile>
          <S.ProfileContent>
            <S.ProfileSettings>
              <S.SettingsLeft>
                <S.SettingsAvatar>
                  {sellerData?.avatar && (
                    <img src={baseUrl + sellerData.avatar} alt="" />
                  )}
                </S.SettingsAvatar>
              </S.SettingsLeft>
              <S.SettingsRight>
                <S.SellerInfoContainer>
                  <p>{sellerData?.name}</p>
                  <p>{sellerData?.city}</p>
                  <p>Продает товары с {formatDate(sellerData?.sells_from)}</p>

                  <div className="seller__img-mob-block">
                    <div
                      className="seller__img-mob"
                      style={{ display: 'none' }}
                    >
                      <a href="" target="_self">
                        <img src="#" alt="" />
                      </a>
                    </div>

                    <ShowPhoneNumButton phone={sellerData?.phone} />
                  </div>
                </S.SellerInfoContainer>
              </S.SettingsRight>
            </S.ProfileSettings>
          </S.ProfileContent>
        </S.Profile>
      </S.ProfileContainer>
      <S.CardsContainer>
        <S.ProfileHeading>Товары продавца</S.ProfileHeading>
        <Cards data={data} />
      </S.CardsContainer>
    </>
  );
};
