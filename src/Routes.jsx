import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main-page/MainPage';
import { Profile } from './pages/profile-page/Profile';
import { Layout } from './components/layout/Layout';
import { AdvPage } from './pages/adv-page/AdvPage';
import { SellerProfile } from './pages/profile-page/SellerProfile';
import { Auth } from './pages/auth-page/Auth';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';
import { NotFoundPage } from './pages/not-found-page/NotFoundPage';

export const AppRoutes = () => {
  const user = useSelector((state) => state.auth.isAuth);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/seller-profile/:id" element={<SellerProfile />} />
        <Route path="/ad/:id" element={<AdvPage />} />

        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
