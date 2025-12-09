import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import AllContestPage from '../pages/AllContestPage/AllContestPage';
import LoginPage from '../pages/AuthPages/LoginPage';
import RegisterPage from '../pages/AuthPages/RegisterPage';
import HomePage from '../pages/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/contests',
        Component: AllContestPage,
      },

      // Auth Pages
      {
        path: '/auth/login',
        Component: LoginPage,
      },
      {
        path: '/auth/register',
        Component: RegisterPage,
      },
    ],
  },
]);

export default router;
