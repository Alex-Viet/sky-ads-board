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
    src: url('/fonts/Roboto-Regular.ttf');
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

// Общие компоненты кнопок с border и без
export const Button = css`
  color: #ffffff;
  background-color: #009ee4;
  border-radius: 6px;

  &:hover {
    background-color: #0080c1;
  }
`;

export const ButtonWithBorder = css`
  color: #fff;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
