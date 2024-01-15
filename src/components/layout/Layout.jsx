import { Outlet } from 'react-router-dom';
import { Wrapper, Container, Main, MainContainer } from '../../App.styles';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { MainNav } from '../main-nav/MainNav';

export const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <MainNav />
          <MainContainer>
            <Outlet />
          </MainContainer>
        </Main>
        <Footer />
      </Container>
    </Wrapper>
  );
};
