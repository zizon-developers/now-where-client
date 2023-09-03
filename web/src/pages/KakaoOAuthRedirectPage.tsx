import { useLocation } from 'react-router-dom';
import { useKakaoLogin } from 'hooks/services/auth';

const KakaoOAuthRedirectPage = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const code = searchParams.get('code') || '';

  const { isLoading, isError } = useKakaoLogin({ code });

  if (isError) {
    return <p>서버 에러가 발생하였습니다.</p>;
  }

  if (isLoading) {
    return <p>로그인 중...</p>;
  }

  return <main></main>;
};

export default KakaoOAuthRedirectPage;
