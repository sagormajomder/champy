import { useEffect, useState } from 'react';
import { BsClipboardCheck } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GoHome } from 'react-icons/go';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { LuTrophy, LuUsers } from 'react-icons/lu';
import { PiMedal } from 'react-icons/pi';
import { Link, Outlet } from 'react-router';
import useRole from '../hooks/useRole';

export default function DashboardLayout() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const { role } = useRole();
  let dashboardLink = '/';
  const userDashboard = '/dashboard/participated-contests';
  const creatorDashboard = '/dashboard/add-contest';
  const adminDashboard = '/dashboard/manage-users';

  if (role === 'user') dashboardLink = userDashboard;
  if (role === 'creator') dashboardLink = creatorDashboard;
  if (role === 'admin') dashboardLink = adminDashboard;

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Navbar */}
        <nav className='navbar w-full bg-base-300'>
          <label
            htmlFor='my-drawer-4'
            aria-label='open sidebar'
            className='btn btn-square btn-ghost'>
            {/* Sidebar toggle icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2'
              fill='none'
              stroke='currentColor'
              className='my-1.5 inline-block size-4'>
              <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
              <path d='M9 4v16'></path>
              <path d='M14 10l2 2l-2 2'></path>
            </svg>
          </label>
          <div className='px-4'>
            <Link to={dashboardLink}>
              {role[0].toUpperCase() + role.slice(1)} Dashboard
            </Link>
          </div>
        </nav>
        {/* Page content here */}
        <div className='p-10'>
          <Outlet />
        </div>
      </div>

      <div className='drawer-side is-drawer-close:overflow-visible'>
        <label
          htmlFor='my-drawer-4'
          aria-label='close sidebar'
          className='drawer-overlay'></label>
        <div className='flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64'>
          {/* Sidebar content here */}
          <ul className='menu w-full grow'>
            {/* Home */}
            <li>
              <Link
                to='/'
                className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                data-tip='Homepage'>
                {/* Home icon */}
                <GoHome className='text-xl' />
                <span className='is-drawer-close:hidden'>Homepage</span>
              </Link>
            </li>
            {/* USER ROUTE */}
            {role === 'user' && (
              <>
                {/* Participated Contests */}
                <li>
                  <Link
                    to='/dashboard/participated-contests'
                    className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                    data-tip='Participated Contests'>
                    <BsClipboardCheck className='text-lg' />
                    <span className='is-drawer-close:hidden'>
                      Participated Contests
                    </span>
                  </Link>
                </li>
                {/* Winning Contests */}
                <li>
                  <Link
                    to='/dashboard/winning-contests'
                    className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                    data-tip='Winning Contests'>
                    <PiMedal className='text-xl' />
                    <span className='is-drawer-close:hidden'>
                      Winning Contests
                    </span>
                  </Link>
                </li>
                {/* My Profile */}
                <li>
                  <Link
                    to='/dashboard/profile'
                    className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                    data-tip='My Profile'>
                    <CgProfile className='text-xl' />
                    <span className='is-drawer-close:hidden'>My Profile</span>
                  </Link>
                </li>
              </>
            )}

            {/* CREATOR ROUTE */}
            {role === 'creator' && (
              <>
                {/* Add Contest */}
                <li>
                  <Link
                    to='/dashboard/add-contest'
                    className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                    data-tip='Add Contest'>
                    <IoMdAddCircleOutline className='text-xl' />
                    <span className='is-drawer-close:hidden'>Add Contest</span>
                  </Link>
                </li>
                {/* Creator Created Contests */}
                <li>
                  <Link
                    to='/dashboard/created-contests'
                    className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                    data-tip='My Created Contests'>
                    <HiOutlinePencilAlt className='text-xl' />
                    <span className='is-drawer-close:hidden'>
                      My Created Contests
                    </span>
                  </Link>
                </li>
              </>
            )}

            {/* ADMIN ROUTE */}
            {role === 'admin' && (
              <>
                {/* Manage Users */}
                <li>
                  <Link
                    to='/dashboard/manage-users'
                    className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                    data-tip='Manage Users'>
                    <LuUsers className='text-xl' />
                    <span className='is-drawer-close:hidden'>Manage Users</span>
                  </Link>
                </li>
                {/* Manage Contest */}
                <li>
                  <Link
                    to='/dashboard/manage-contests'
                    className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                    data-tip='Manage Contests'>
                    <LuTrophy className='text-xl' />
                    <span className='is-drawer-close:hidden'>
                      Manage Contests
                    </span>
                  </Link>
                </li>
              </>
            )}

            {/* List item */}
          </ul>
        </div>
      </div>
    </div>
  );
}
