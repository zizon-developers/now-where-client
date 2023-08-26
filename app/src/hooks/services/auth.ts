import { useQuery } from 'react-query';
import { kakaoLogin } from '../../services/auth';
import { KakaoLoginRequest } from '../../types/auth/request';

export const useKakaoLogin = ({ code }: KakaoLoginRequest) => {
  return useQuery({
    queryKey: ['kakaoLogin', code],
    queryFn: () => kakaoLogin({ code }),
    onSuccess: (kakaoLoginResponse) => {
      // window.location.href = '/';
      console.log(kakaoLoginResponse);

      console.log(kakaoLoginResponse.headers.authorization);

      localStorage.setItem('ACCESS_TOKEN', kakaoLoginResponse.headers.Authorization);
    },
    onError: () => {
      alert('서버 에러가 발생하였습니다. 로그인을 다시 시도해주세요.');
      // window.location.href = '/login';
    },
    enabled: Boolean(code),
  });
};
