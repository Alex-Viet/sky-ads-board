import { useNavigate } from 'react-router-dom';
import * as S from './Footer.styles';
import { useState } from 'react';
import { AddNewAd } from '../modals/AddNewAd';

export const Footer = () => {
  const navigate = useNavigate();
  const [isAddNewAdPopupOpen, setAddNewAdPopupOpen] = useState(false);

  return (
    <S.Footer>
      <S.FooterContainer>
        {isAddNewAdPopupOpen && (
          <AddNewAd setPopupOpen={setAddNewAdPopupOpen} />
        )}
        <S.FooterImg onClick={() => navigate('/')}>
          <img src="/img/icons/home.png" alt="home" />
        </S.FooterImg>
        <S.FooterImg onClick={() => setAddNewAdPopupOpen(true)}>
          <img src="/img/icons/add.png" alt="add" />
        </S.FooterImg>
        <S.FooterImg onClick={() => navigate('/profile')}>
          <img src="/img/icons/profile.png" alt="profile" />
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  );
};
