import styled from 'styled-components';

export const Footer = styled.footer`
  display: none;

  @media screen and (max-width: 590px) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10001;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const FooterContainer = styled.div`
  @media screen and (max-width: 590px) {
    width: 225px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FooterImg = styled.div`
  @media screen and (max-width: 590px) {
    width: 42px;
    height: 42px;
  }

  & img {
    @media screen and (max-width: 590px) {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
`;
