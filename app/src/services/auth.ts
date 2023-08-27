import Service from '.';
import { KakaoLoginRequest } from '../types/auth/request';
import { KakaoLoginResponse } from '../types/auth/response';

export const kakaoLogin = async ({ code }: KakaoLoginRequest) => {
  const { data, headers } = await Service.post<KakaoLoginResponse>('/auth/login', {
    code,
  });

  return { data, headers };
};
