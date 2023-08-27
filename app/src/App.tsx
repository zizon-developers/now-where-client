import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import KakaoOAuthRedirectPage from './pages/KakaoOAuthRedirectPage';
import Pathname from './constants/Pathname';

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
    </Routes>
  );
};

export default App;
