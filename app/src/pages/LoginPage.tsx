import React from 'react';
import { kakaoAuthURL } from '../constants/Kakao';

const LoginPage: React.FC = () => {
  const handleLoginButtonClick = () => {
    window.location.href = kakaoAuthURL;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img
        src="./logo.png"
        alt="로고"
        className="w-[270px] h-auto mb-[200px]"
      />
      <button
        onClick={handleLoginButtonClick}
        className="flex items-center justify-center"
      >
        <img
          src="./kakaologin.png"
          alt="카카오 로그인"
          className="w-52 h-auto mr-2"
        />
      </button>
    </div>
  );
};

export default LoginPage;
