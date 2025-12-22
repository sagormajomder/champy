import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import { useAxiosSecure } from '../../hooks/useAxiosSecure';
import AllContest from '../AllContestPage/AllContest';

export default function PopularContestsSection() {
  const axiosSecure = useAxiosSecure();
  const { isPending, data: contests = [] } = useQuery({
    queryKey: ['contests', 'confirmed'],
    queryFn: async () => {
      const res = await axiosSecure.get('/contests?status=confirmed');
      return res.data;
    },
  });

  const sortedContests = contests.toSorted(
    (a, b) => b.participatedCount - a.participatedCount
  );

  return (
    <section className='py-14'>
      <Container className='space-y-10'>
        <SectionTitle
          title='Popular Contests'
          desc='Join the most active competitions happening right now.'
        />
        <div className='space-y-5'>
          {/* Contest Cards */}
          <AllContest sortedContests={sortedContests.slice(0, 8)} />
          <div className='text-center'>
            <Link className='btn btn-primary' to='/contests'>
              View More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
