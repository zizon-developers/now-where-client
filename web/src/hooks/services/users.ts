import { useMutation } from 'react-query';
import { registerKakaoPaylinkId } from 'services/users';
import { RegisterKakaoPayLinkIdRequest } from 'types/users/request';

export const useRegisterKakaoPayLinkId = () => {
  return useMutation({
    mutationKey: ['registerKakayPayLinkId'],
    mutationFn: ({ kakaoPayLinkId }: RegisterKakaoPayLinkIdRequest) =>
      registerKakaoPaylinkId({ kakaoPayLinkId }),
  });
};
