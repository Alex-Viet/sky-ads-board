import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main-page/MainPage';
import { Profile } from './pages/profile-page/Profile';
import { Layout } from './components/layout/Layout';
import { AdvPage } from './pages/adv-page/AdvPage';
import { SellerProfile } from './pages/profile-page/SellerProfile';
import { MyAdvPage } from './pages/adv-page/MyAdvPage';
import { Auth } from './pages/auth-page/Auth';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/seller-profile" element={<SellerProfile />}></Route>
        <Route path="/ad/:id" element={<AdvPage />}></Route>
        <Route path="/my-ad" element={<MyAdvPage />}></Route>
      </Route>
    </Routes>
  );
};
