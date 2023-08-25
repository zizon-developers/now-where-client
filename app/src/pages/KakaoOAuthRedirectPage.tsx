import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type LoginResponse = {
  email: string;
  name: string;
  userId: string;
};

const KakaoOAuthRedirectPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  useEffect(() => {
    (async () => {
      const loginResponse = await axios.post<LoginResponse>(
        'http://15.164.233.102:8088/api/v1/auth/login',
        {
          code,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { email, name, userId } = loginResponse.data;

      console.log({ email, name, userId });
    })();
  }, []);

  return <main>{code}</main>;
};

export default KakaoOAuthRedirectPage;
