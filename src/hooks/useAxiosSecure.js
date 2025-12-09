import axios from 'axios';

const secureInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_LINK,
});
export function useAxiosSecure() {
  return secureInstance;
}
