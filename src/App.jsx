import { GlobalStyles } from './App.styles';
import { AppRoutes } from './Routes';
import { SearchProvider } from './context/SearchContext';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <SearchProvider>
        <AppRoutes />
      </SearchProvider>
    </>
  );
};
