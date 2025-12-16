import { createBrowserRouter } from 'react-router';
import DashboardLayout from '../layouts/DashboardLayout';
import RootLayout from '../layouts/RootLayout';
import AllContestPage from '../pages/AllContestPage/AllContestPage';
import LoginPage from '../pages/AuthPages/LoginPage';
import RegisterPage from '../pages/AuthPages/RegisterPage';
import ContestDetailsPage from '../pages/ContestDetailsPage/ContestDetailsPage';
import ManageContestPage from '../pages/DashboardPages/AdminPages/ManageContestPage';
import ManageUsersPage from '../pages/DashboardPages/AdminPages/ManageUsersPage';
import AddContestPage from '../pages/DashboardPages/CreatorPages/AddContestPage';
import EditContestPage from '../pages/DashboardPages/CreatorPages/EditContestPage';
import MyCreatedContestsPage from '../pages/DashboardPages/CreatorPages/MyCreatedContestsPage';
import HomePage from '../pages/HomePage/HomePage';
import PrivateRoute from './PrivateRoute';

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

      {
        path: '/contest-details/:id',
        element: (
          <PrivateRoute>
            <ContestDetailsPage />
          </PrivateRoute>
        ),
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
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // Creator Role Pages
      {
        path: 'add-contest',
        Component: AddContestPage,
      },
      {
        path: 'created-contests',
        Component: MyCreatedContestsPage,
      },
      {
        path: 'edit-contest/:id',
        Component: EditContestPage,
      },
      // Admin Route
      {
        path: 'manage-users',
        Component: ManageUsersPage,
      },
      {
        path: 'manage-contests',
        Component: ManageContestPage,
      },
    ],
  },
]);

export default router;
