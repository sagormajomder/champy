import { useQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <SectionTitle
            title='Popular Contests'
            desc='Join the most active competitions happening right now.'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='space-y-5'>
          {/* Contest Cards */}
          <AllContest sortedContests={sortedContests.slice(0, 8)} />
          <div className='text-center'>
            <Link className='btn btn-primary' to='/contests'>
              View More
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
