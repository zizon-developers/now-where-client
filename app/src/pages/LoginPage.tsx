import React from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';

const LoginPage: React.FC = () => {
  const Rest_api_key = '867de5dcb061c1d22c4188893654cddb'; // REST API KEY
  const redirect_uri = 'http://localhost:3000/auth/callback/kakao'; // Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img
        src="./logo.png"
        alt="로고"
        className="w-[270px] h-auto mb-[200px]"
      />
      <button
        onClick={handleLogin}
        className="flex items-center justify-center p-4 pt-3 pb-3 space-x-6 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 focus:outline-none"
      >
        <RiKakaoTalkFill style={{ fontSize: '30px' }} />
        <span className="text-black text-opacity-60 pr-7 font-semibold">카카오 로그인</span>
      </button>
    </div>
  );
};

export default LoginPage;
