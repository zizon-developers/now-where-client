import Service from '.';
import { KakaoLoginRequest } from 'types/auth/request';
import { KakaoLoginResponse } from 'types/auth/response';

export const kakaoLogin = async ({ code }: KakaoLoginRequest) => {
  const { headers } = await Service.post<KakaoLoginResponse>('/auth/login', {
    code,
  });

  return { headers };
};

export const logout = async () => {
  return await Service.post('/auth/logout');
};
