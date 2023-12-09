import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main-page/MainPage';
import { Profile } from './pages/profile-page/Profile';
import { Layout } from './components/layout/Layout';
import { AdvPage } from './pages/adv-page/AdvPage';
// import { Auth } from './pages/auth-page/Auth';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="ad" element={<AdvPage />}></Route>
      </Route>
    </Routes>
  );
};
