import { useQuery } from '@tanstack/react-query';
import { IoHomeOutline } from 'react-icons/io5';
import { Link, useSearchParams } from 'react-router';
import Container from '../components/Container';
import Loader from '../components/Loader';
import { useAxiosSecure } from '../hooks/useAxiosSecure';
import paymentSuccessSvg from './../assets/send-money.svg';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get('session_id');

  const { data: paymentInfo = {}, isPending } = useQuery({
    queryKey: [sessionId],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payment-success?session_id=${sessionId}`
      );

      return res.data;
    },
  });

  console.log(paymentInfo);

  const { contestId = '', transactionId } = paymentInfo;

  if (isPending) return <Loader />;

  return (
    <section className='py-14'>
      <Container className='space-y-10'>
        <img
          className='object-contain h-62.5 sm:h-87.5 mx-auto'
          src={paymentSuccessSvg}
          alt='Payment success svg image'
        />
        <div className='text-center'>
          <h1 className='mb-4'>
            Hurray! Your payment was successful and you joined the contest.
          </h1>

          <p>
            <strong>Transaction ID:</strong> {transactionId}
          </p>
        </div>
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
            Submit contest task
          </Link>
        </div>
      </Container>
    </section>
  );
}
