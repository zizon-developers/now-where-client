import Service from '.';
import { KakaoLoginRequest } from '../types/auth/request';
import { KakaoLoginResponse } from '../types/auth/response';

export const kakaoLogin = async ({ code }: KakaoLoginRequest) => {
  const { data, headers } = await Service.post<KakaoLoginResponse>('/auth/login', {
    code,
  });

  console.log(headers.authorization, headers['Authorization'], headers.Authorization);

  return { data, headers };
};
