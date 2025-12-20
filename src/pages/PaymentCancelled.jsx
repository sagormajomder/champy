import { useQuery } from '@tanstack/react-query';
import { IoHomeOutline } from 'react-icons/io5';
import { Link, useSearchParams } from 'react-router';
import Container from '../components/Container';
import { useAxiosSecure } from '../hooks/useAxiosSecure';
import paymentErrorSVG from './../assets/payment-error.svg';

export default function PaymentCancelled() {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get('session_id');

  const { data: contestId = null } = useQuery({
    queryKey: [sessionId],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payment-cancelled?session_id=${sessionId}`
      );

      return res.data.contestId;
    },
  });

  return (
    <section className='py-14'>
      <Container className='space-y-10'>
        <img
          className=' h-62.5 sm:h-87.5 mx-auto'
          src={paymentErrorSVG}
          alt='Payment error svg image'
        />

        <div className='text-center'>
          <h1 className='mb-4'>
            Unfortunately! Your payment was cancelled. Please try again.
          </h1>
          <div className='flex flex-col xs:flex-row gap-2 items-center justify-center'>
            <Link to='/' className='btn btn-outline btn-primary'>
              <span className='text-xl'>
                <IoHomeOutline />
              </span>
              Back to Home
            </Link>
            <Link
              to={`/contest-details/${contestId}`}
              className='btn btn-primary'>
              Back to the contest
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
