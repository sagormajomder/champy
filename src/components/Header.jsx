import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import Container from './Container';

export default function Header() {
  const { user, setUser, signOutUser } = useAuth();
  const links = (
    <>
      <li className='navLink'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='navLink'>
        <NavLink to='/contests'>Contests</NavLink>
      </li>
    </>
  );

  function handleLogout() {
    signOutUser()
      .then(() => {
        toast.success('User logout successful!');
        setUser(null);
      })
      .catch(error => {
        console.log(error);
        toast.error(error.message);
      });
  }

  return (
    <header className='bg-base-100 shadow-sm sticky top-0 z-10'>
      <Container>
        <nav className='navbar'>
          {/* Navbar Start */}
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  {' '}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />{' '}
                </svg>
              </div>
              <ul
                tabIndex='-1'
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                {links}
              </ul>
            </div>
            <Link className=' text-xl font-bold'>Champy</Link>
          </div>
          {/* Navbar Center */}
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>{links}</ul>
          </div>
          {/* Navbar End */}
          <div className='navbar-end'>
            {!user && (
              <Link to='/auth/login' className='btn btn-primary'>
                Login
              </Link>
            )}

            {user && (
              <div className='dropdown dropdown-end'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full'>
                    <img alt={user.displayName} src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex='-1'
                  className='menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm'>
                  <li className='items-center border-b-2 mb-2'>
                    <span className='text-lg font-semibold hover:bg-transparent active:text-base-content'>
                      {user.displayName}
                    </span>
                  </li>
                  <li className='mb-2'>
                    <Link to='/dashboard'>Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className='btn btn-primary'>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}
