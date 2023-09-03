import { useQuery, useMutation } from 'react-query';
import { kakaoLogin, logout } from 'services/auth';
import { KakaoLoginRequest } from 'types/auth/request';
import Pathname from 'constants/Pathname';

import { UseMutationOptions } from 'react-query';

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

export const useLogout = (options: UseMutationOptions) => {
  return useMutation({
    mutationKey: ['kakaoLogout'],
    mutationFn: () => logout(),
    ...options,
  });
};
