import Service from '.';
import { RegisterKakaoPayLinkIdRequest } from 'types/users/request';

export const registerKakaoPaylinkId = async ({ kakaoPayLinkId }: RegisterKakaoPayLinkIdRequest) => {
  return await Service.post('/users/pay-id', null, {
    params: { id: kakaoPayLinkId },
  });
};
