import { useQuery, useMutation } from 'react-query';
import { kakaoLogin } from '../../services/auth';
import { kakaoLogout } from '../../services/auth';
import { KakaoLoginRequest } from '../../types/auth/request';
import Pathname from '../../constants/Pathname';

export const useKakaoLogin = ({ code }: KakaoLoginRequest) => {
  return useQuery({
    queryKey: ['kakaoLogin', code],
    queryFn: () => kakaoLogin({ code }),
    onSuccess: (kakaoLoginResponse) => {
      localStorage.setItem('ACCESS_TOKEN', kakaoLoginResponse.headers.authorization);
      window.location.href = Pathname.HOME_PAGE;
    },
    onError: () => {
      alert('서버 에러가 발생하였습니다. 로그인을 다시 시도해주세요.');
      window.location.href = Pathname.LOGIN_PAGE;
    },
    enabled: Boolean(code),
  });
};

export const useKakaoLogout = () => {
  return useMutation(() => kakaoLogout(), {
    onSuccess: () => {
      localStorage.removeItem('ACCESS_TOKEN');
      alert('로그아웃 되었습니다.');
      window.location.href = Pathname.LOGIN_PAGE;
    },
    onError: (error) => {
      console.error('Logout error:', error);
    },
  });
};
