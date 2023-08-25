import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import KakaoOAuthRedirectPage from './pages/KakaoOAuthRedirectPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />
        <Route
          path="/auth/callback/kakao"
          element={<KakaoOAuthRedirectPage />}
        />
      </Routes>
    </>
  );
};

export default App;
