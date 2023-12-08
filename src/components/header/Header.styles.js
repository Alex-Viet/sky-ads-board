import styled from 'styled-components';
import { ButtonWithBorder } from '../../App.styles';

export const Header = styled.header`
  background-color: #009ee4;
`;

export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const HeaderButton = styled.button`
  ${ButtonWithBorder}
`;
