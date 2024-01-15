import { createContext, useContext, useMemo, useState } from 'react';

export const SearchContext = createContext({});

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  // Всегда можно переделать, чтобы поиск работал после нажатия "Найти". Для этого нужно перенести состояние в MainNav
  const [searchValue, setSearchValue] = useState('');

  const search = (text) => {
    setSearchValue(text.toLowerCase());
  };

  const searchingContext = useMemo(() => ({
    searchValue,
    search,
  }));

  return (
    <SearchContext.Provider value={searchingContext}>
      {children}
    </SearchContext.Provider>
  );
};
