import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

const secureInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_LINK,
});
export function useAxiosSecure() {
  const { user, signOutUser, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      // intercept request
      const reqInterceptor = secureInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user?.accessToken}`;
        return config;
      });

      // interceptor response
      const resInterceptor = secureInstance.interceptors.response.use(
        response => {
          return response;
        },
        error => {
          console.log(error);

          const statusCode = error.status;
          if (statusCode === 401 || statusCode === 403) {
            signOutUser().then(() => {
              setUser(null);
              navigate('/auth/login', { replace: true, state: null });
            });
          }

          return Promise.reject(error);
        }
      );

      return () => {
        secureInstance.interceptors.request.eject(reqInterceptor);
        secureInstance.interceptors.response.eject(resInterceptor);
      };
    },
    [user, signOutUser, navigate, setUser]
  );

  return secureInstance;
}
