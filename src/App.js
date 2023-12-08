import { GlobalStyles, Wrapper, Container } from './App.styles';
// import { Profile } from './pages/profile-page/Profile';
import { MainPage } from './pages/main-page/MainPage';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <MainPage />
          {/* <Profile /> */}
        </Container>
      </Wrapper>
    </>
  );
};
