import React from 'react';
import { useKakaoLogout } from '../hooks/services/auth';

const MyPage: React.FC = () => {
  const logoutMutation = useKakaoLogout();

  const handleLogoutButtonClick = async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogoutButtonClick}>로그아웃</button>
    </div>
  );
};

export default MyPage;
