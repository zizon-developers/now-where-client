const LoginPage: React.FC = () => {
  const Rest_api_key = '867de5dcb061c1d22c4188893654cddb'; //REST API KEY
  const redirect_uri = 'http://localhost:3000/auth/callback/kakao'; //Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return <button onClick={handleLogin}>카카오 로그인</button>;
};

export default LoginPage;
