import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import { useAxiosSecure } from '../../hooks/useAxiosSecure';
import ContestBanner from './ContestBanner';
import ContestDetails from './ContestDetails';
import ContestDetailsLeft from './ContestDetailsLeft';
import ContestDetailsRight from './ContestDetailsRight';

export default function ContestDetailsPage() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: contest = {}, isPending } = useQuery({
    queryKey: ['contest', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    },
  });

  if (isPending) return <Loader />;

  return (
    <section className='py-14'>
      <Container className='space-y-10'>
        {/* Banner Image with Overlay Content */}
        <ContestBanner contest={contest} />
        {/* Contest Details */}
        <ContestDetails>
          <ContestDetailsLeft contest={contest} />
          <ContestDetailsRight contest={contest} />
        </ContestDetails>
      </Container>
    </section>
  );
}
