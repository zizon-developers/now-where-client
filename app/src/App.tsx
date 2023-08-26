import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import KakaoOAuthRedirectPage from './pages/KakaoOAuthRedirectPage';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<main></main>}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/auth/callback/kakao"
        element={<KakaoOAuthRedirectPage />}
      />
    </Routes>
  );
};

export default App;
