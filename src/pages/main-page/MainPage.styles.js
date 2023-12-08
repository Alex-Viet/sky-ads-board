import styled from 'styled-components';

export const Main = styled.main``;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 10px 10px 30px;
`;

export const MainTitle = styled.h2`
  font-style: normal;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  &:hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
`;
