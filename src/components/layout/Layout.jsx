import { Outlet } from 'react-router-dom';
import { Wrapper, Container, Main, MainContainer } from '../../App.styles';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Search } from '../../components/search/Search';

export const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <Search />
          <MainContainer>
            <Outlet />
          </MainContainer>
        </Main>
        <Footer />
      </Container>
    </Wrapper>
  );
};
