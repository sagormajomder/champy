import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrophy } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import useRole from '../hooks/useRole';
import Container from './Container';

export default function Header() {
  const { user, setUser, signOutUser } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const { role } = useRole();

  let dashboardLink = '/';
  const userDashboard = '/dashboard/participated-contests';
  const creatorDashboard = '/dashboard/add-contest';
  const adminDashboard = '/dashboard/manage-users';

  if (role === 'user') dashboardLink = userDashboard;
  if (role === 'creator') dashboardLink = creatorDashboard;
  if (role === 'admin') dashboardLink = adminDashboard;

  const links = (
    <>
      <li className='navLink'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='navLink'>
        <NavLink to='/contests'>Contests</NavLink>
      </li>
      <li className='navLink'>
        <NavLink to='/leaderboard'>Leaderboard</NavLink>
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

  const handleTheme = checked => {
    setTheme(checked ? 'dark' : 'light');
  };

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className='bg-base-100 shadow-sm sticky top-0 z-100'>
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
            <Link className=' text-xl font-bold flex gap-0.5 items-center'>
              <FaTrophy className='text-primary text-2xl' />
              Champy
            </Link>
          </div>
          {/* Navbar Center */}
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>{links}</ul>
          </div>
          {/* Navbar End */}
          <div className='navbar-end gap-1'>
            {!user && (
              <Link to='/auth/login' className='btn btn-primary'>
                Login
              </Link>
            )}

            {user && (
              <div className='flex gap-1'>
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
                      <Link to={dashboardLink}>Dashboard</Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className='btn btn-primary'>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* Toggle Theme Mobile */}
            <label className='inline-flex items-center relative'>
              <input
                className='peer hidden'
                id='toggle-mobile'
                type='checkbox'
                onChange={e => handleTheme(e.target.checked)}
                // defaultChecked={localStorage.getItem('theme') === 'dark'}
                checked={theme === 'dark'}
              />
              <div className="relative w-20  h-10 bg-white peer-checked:bg-zinc-500 rounded-md after:absolute after:content-[''] after:w-8 after:h-6.25 after:bg-linear-to-r after:from-orange-500 after:to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[8px] after:left-[8px] active:after:w-[50px] peer-checked:after:left-[71px] peer-checked:after:-translate-x-full shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
              <svg
                height='0'
                width='100'
                viewBox='0 0 24 24'
                data-name='Layer 1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-white  peer-checked:opacity-60 absolute w-4 h-4 left-4'>
                <path d='M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z'></path>
              </svg>
              <svg
                height='512'
                width='512'
                viewBox='0 0 24 24'
                data-name='Layer 1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-4'>
                <path d='M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z'></path>
              </svg>
            </label>
          </div>
        </nav>
      </Container>
    </header>
  );
}
