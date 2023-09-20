import { Route, Routes } from 'react-router-dom';
import Pathname from 'constants/Pathname';
import KakaoOAuthRedirectPage from 'pages/KakaoOAuthRedirectPage';
import LoginPage from 'pages/LoginPage';
import MyPage from 'pages/MyPage';
import PayLinkPage from 'pages/PayLinkPage';
import FreiendListPage from 'pages/FreiendListPage';

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
        path={Pathname.PAY_LINK_PAGE}
        element={<PayLinkPage />}
      />
      <Route
        path={Pathname.FREIEND_LIST_PAGE}
        element={<FreiendListPage />}
      />
    </Routes>
  );
};

export default App;
