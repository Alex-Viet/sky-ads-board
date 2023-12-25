import { useParams } from 'react-router-dom';
import { useGetCurrentUserAdsQuery } from '../../services/ads';
import { Profile } from './Profile';

export const SellerProfile = () => {
  const { id } = useParams();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useGetCurrentUserAdsQuery(id);

  const sellerData = data[0]?.user;

  return (
    <Profile
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      sellerData={sellerData}
    />
  );
};
