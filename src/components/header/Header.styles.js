import styled from 'styled-components';
import { ButtonWithBorder } from '../../App.styles';

export const Header = styled.header`
  background-color: #009ee4;

  @media screen and (max-width: 590px) {
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const HeaderButton = styled.button`
  ${ButtonWithBorder}
`;

export const UpButton = styled.button`
  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-70px);
      transform: translateY(-70px);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(-70px);
      transform: translateY(-70px);
    }
  }

  position: fixed;
  bottom: 0;
  right: 66px;
  width: 50px;
  height: 50px;
  background-image: url(/img/icons/up.svg);
  background-size: 50px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  z-index: 20000;
  -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
