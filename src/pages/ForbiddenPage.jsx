import Lottie from 'lottie-react';
import { Link } from 'react-router';
import forbiddenAnimation from '../assets/forbidden.json';
import useRole from '../hooks/useRole';
export default function ForbiddenPage() {
  const { role } = useRole();

  let dashboardLink = '/';
  const userDashboard = '/dashboard/participated-contests';
  const creatorDashboard = '/dashboard/add-contest';
  const adminDashboard = '/dashboard/manage-users';

  if (role === 'user') dashboardLink = userDashboard;
  if (role === 'creator') dashboardLink = creatorDashboard;
  if (role === 'admin') dashboardLink = adminDashboard;

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Lottie loop={false} autoplay={true} animationData={forbiddenAnimation} />
      <h1 className='text-3xl font-bold text-red-500'>
        You Are Forbidden to Access This Page
      </h1>
      <p className='text-lg text-gray-600 mt-2'>
        Please contact the administrator if you believe this is an error.
      </p>
      <div className='my-3 space-x-3'>
        <Link to='/' className='btn btn-primary'>
          {' '}
          Go to Home
        </Link>
        <Link className='btn btn-outline btn-primary' to={dashboardLink}>
          {' '}
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
