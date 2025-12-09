import { Link, NavLink } from 'react-router';
import Container from './Container';

export default function Header() {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/contests'>Contests</NavLink>
      </li>
    </>
  );
  return (
    <header className='bg-base-100 shadow-sm'>
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
            <Link className=' text-xl font-bold'>daisyUI</Link>
          </div>
          {/* Navbar Center */}
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>{links}</ul>
          </div>
          {/* Navbar End */}
          <div className='navbar-end'>
            <Link to='/auth/login' className='btn btn-primary'>
              Login
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
