import { createBrowserRouter } from 'react-router';
import Loader from '../components/Loader';
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
import SubmissionsPage from '../pages/DashboardPages/CreatorPages/SubmissionsPage';
import MyProfilePage from '../pages/DashboardPages/UserPages/MyProfilePage';
import ParticipatedContestsPage from '../pages/DashboardPages/UserPages/ParticipatedContestsPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import LeaderboardPage from '../pages/LeaderboardPage';
import PaymentCancelled from '../pages/PaymentCancelled';
import PaymentSuccess from '../pages/PaymentSuccess';
import WinningContestsPage from './../pages/DashboardPages/UserPages/WinningContestsPage';
import AdminRoute from './AdminRoute';
import CreatorRoute from './CreatorRoute';
import PrivateRoute from './PrivateRoute';
import UserRoute from './UserRoute';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'contests',
        Component: AllContestPage,
      },

      {
        path: 'leaderboard',
        Component: LeaderboardPage,
      },

      {
        path: 'contest-details/:id',
        element: (
          <PrivateRoute>
            <ContestDetailsPage />
          </PrivateRoute>
        ),
      },

      // Payment Pages
      {
        path: 'payment-success',
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: 'payment-cancelled',
        element: (
          <PrivateRoute>
            <PaymentCancelled />
          </PrivateRoute>
        ),
      },

      // Auth Pages
      {
        path: 'auth/login',
        Component: LoginPage,
      },
      {
        path: 'auth/register',
        Component: RegisterPage,
      },
      // Error Page
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
  {
    path: 'dashboard',
    hydrateFallbackElement: <Loader />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // User Route
      {
        path: 'participated-contests',
        element: (
          <UserRoute>
            <ParticipatedContestsPage />
          </UserRoute>
        ),
      },
      {
        path: 'winning-contests',
        element: (
          <UserRoute>
            <WinningContestsPage />
          </UserRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <UserRoute>
            <MyProfilePage />
          </UserRoute>
        ),
      },

      // Creator Route
      {
        path: 'add-contest',
        element: (
          <CreatorRoute>
            <AddContestPage />
          </CreatorRoute>
        ),
      },
      {
        path: 'created-contests',
        element: (
          <CreatorRoute>
            <MyCreatedContestsPage />
          </CreatorRoute>
        ),
      },
      {
        path: 'edit-contest/:id',
        element: (
          <CreatorRoute>
            <EditContestPage />
          </CreatorRoute>
        ),
      },
      {
        path: 'submissions/:id',
        element: (
          <CreatorRoute>
            <SubmissionsPage />
          </CreatorRoute>
        ),
      },
      // Admin Route
      {
        path: 'manage-users',
        element: (
          <AdminRoute>
            <ManageUsersPage />
          </AdminRoute>
        ),
      },
      {
        path: 'manage-contests',
        element: (
          <AdminRoute>
            <ManageContestPage />
          </AdminRoute>
        ),
      },
      // Error Page
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
