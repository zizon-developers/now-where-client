import React from 'react';
import { useLogout } from '../hooks/services/auth';

const MyPage: React.FC = () => {
  const { mutate: logout } = useLogout({
    onSuccess: () => {
      localStorage.removeItem('ACCESS_TOKEN');
    },
    onError: () => {
      alert('로그아웃에 실패하였습니다.');
    },
  });

  const handleLogoutButtonClick = () => logout();

  return (
    <div>
      <button onClick={handleLogoutButtonClick}>로그아웃</button>
    </div>
  );
};

export default MyPage;
