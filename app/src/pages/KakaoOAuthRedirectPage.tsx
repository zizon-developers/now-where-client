import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LoginResponse } from '../types/loginTypes';

const KakaoOAuthRedirectPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      (async () => {
        try {
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
        } catch (error) {
          console.error('An error occurred while making the request:', error);
        }
      })();
    }
  }, [code]); // code가 변경될 때에만 실행

  return <main>{code}</main>;
};

export default KakaoOAuthRedirectPage;
