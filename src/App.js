import { GlobalStyles, Wrapper, Container } from './App.styles';
import { MainPage } from './pages/main-page/MainPage';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <MainPage />
        </Container>
      </Wrapper>
    </>
  );
};
