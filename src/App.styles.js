import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

@font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/Roboto-Regular.ttf');
    font-style: normal;
}

@font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans/NotoSans-Bold.ttf');
    font-style: normal;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  color: #000000;
}

button {
  cursor: pointer;
}

input,
button,
a {
  font-family: 'Roboto', sans-serif;
}

input,
button {
  border: none;
  outline: none;
}

ul li {
  list-style: none;
}
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Main = styled.main``;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 10px 10px 30px;
`;

// Переиспользуемые компоненты кнопок и заголовков
export const Button = css`
  color: #ffffff;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;

  &:hover {
    background-color: #0080c1;
  }
`;

export const ButtonWithBorder = css`
  color: #fff;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #fff;
  padding: 8px 24px;
  font-size: 16px;
  line-height: 150%;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const TitleH2 = css`
  color: #000;
  font-size: 40px;
  font-style: normal;
  line-height: 220%;
`;

export const HeadingH3 = css`
  ${TitleH2}

  font-size: 32px;
`;
