import Loader from '../components/Loader';

import { useAuth } from '../contexts/AuthContext';
import useRole from './../hooks/useRole';
import ForbiddenPage from './../pages/ForbiddenPage';

export default function UserRoute({ children }) {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loader />;
  }

  if (role !== 'user') {
    return <ForbiddenPage />;
  }

  return children;
}
