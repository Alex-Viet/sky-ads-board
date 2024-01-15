import styled from 'styled-components';
import { TitleH2 } from '../../App.styles';

export const MainTitle = styled.h2`
  ${TitleH2}

  margin-bottom: 10px;

  @media screen and (max-width: 590px) {
    margin: 30px 0 0;
  }
`;
