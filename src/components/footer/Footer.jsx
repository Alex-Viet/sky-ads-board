import { useNavigate } from 'react-router-dom';
import * as S from './Footer.styles';
import { useState } from 'react';
import { AddNewAd } from '../modals/AddNewAd';
import { useSelector } from 'react-redux';

export const Footer = () => {
  const user = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  const [isAddNewAdPopupOpen, setAddNewAdPopupOpen] = useState(false);

  const handleAddNewAd = (e) => {
    e.preventDefault();
    user ? setAddNewAdPopupOpen(true) : navigate('/auth');
  };

  return (
    <S.Footer>
      <S.FooterContainer>
        {isAddNewAdPopupOpen && (
          <AddNewAd setPopupOpen={setAddNewAdPopupOpen} />
        )}
        <S.FooterImgContainer>
          <S.FooterImg onClick={() => navigate('/')}>
            <img src="/img/icons/home.png" alt="home" />
          </S.FooterImg>
          <S.FooterImg onClick={handleAddNewAd}>
            <img src="/img/icons/add.png" alt="add" />
          </S.FooterImg>
          <S.FooterImg onClick={() => navigate('/profile')}>
            <img src="/img/icons/profile.png" alt="profile" />
          </S.FooterImg>
        </S.FooterImgContainer>
      </S.FooterContainer>
    </S.Footer>
  );
};
