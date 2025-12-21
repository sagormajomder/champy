import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import notFoundSVG from '../assets/page-not-found.svg';
import Container from '../components/Container';

export default function ErrorPage() {
  return (
    <section className='py-14'>
      <Container className='space-y-10'>
        <img
          className='object-contain h-62.5 sm:h-87.5 mx-auto'
          src={notFoundSVG}
          alt='Payment success svg image'
        />
        <div className='text-center'>
          <h1 className='mb-2'>Error 404: Page not found!</h1>
          <p className='sm:text-xl'>
            We've looked everywhere but couldn't find the page you are looking
            for.
          </p>
        </div>
        <div className='flex flex-col xs:flex-row gap-2 items-center justify-center'>
          <Link to='/' className='btn btn-primary'>
            <span className='text-xl'>
              <IoHomeOutline />
            </span>
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
