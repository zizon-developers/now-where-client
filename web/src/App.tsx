import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import KakaoOAuthRedirectPage from './pages/KakaoOAuthRedirectPage';
import Pathname from './constants/Pathname';
import MyPage from './pages/mypage';
import TransferRegistrationPage from './pages/TransferRegistrationPage';

const App = () => {
  return (
    <Routes>
      <Route
        path={Pathname.HOME_PAGE}
        element={<main></main>}
      />
      <Route
        path={Pathname.LOGIN_PAGE}
        element={<LoginPage />}
      />
      <Route
        path={Pathname.KAKAO_AUTH_PAGE}
        element={<KakaoOAuthRedirectPage />}
      />
      <Route
        path={Pathname.MY_PAGE}
        element={<MyPage />}
      />
      <Route
        path={Pathname.TRANSFER_REGISTRATION_PAGE}
        element={<TransferRegistrationPage />}
      />
    </Routes>
  );
};

export default App;
