import React from 'react';
import { useKakaoLogout } from '../hooks/services/auth';

const MyPage: React.FC = () => {
  return (
    <div>
      <button onClick={useKakaoLogout}>로그아웃</button>
    </div>
  );
};

export default MyPage;
