import { GlobalStyles, Wrapper, Container } from './App.styles';
import './pages/main-page/main.css';
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
