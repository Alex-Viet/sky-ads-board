import { GlobalStyles, Wrapper, Container } from './App.styles';
import { Auth } from './pages/auth-page/Auth';
// import { MainPage } from './pages/main-page/MainPage';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          {/* <MainPage /> */}
          <Auth />
        </Container>
      </Wrapper>
    </>
  );
};
