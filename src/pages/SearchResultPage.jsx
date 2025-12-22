import { useQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router';
import Container from '../components/Container';
import Loader from '../components/Loader';
import SectionTitle from '../components/SectionTitle';
import { useAxiosSecure } from '../hooks/useAxiosSecure';
import AllContest from './AllContestPage/AllContest';

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  const axiosSecure = useAxiosSecure();

  const { data: searchContests = [], isPending } = useQuery({
    queryKey: ['contests', searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contests/search?searchText=${searchText}`
      );

      return res.data;
    },
  });

  // console.log(searchContests);

  if (isPending) return <Loader />;

  return (
    <section className='py-14'>
      <Container className='space-y-10'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <SectionTitle
            title='Discover Contests'
            desc='Find challenges that match your skills and passions'
          />
        </motion.div>

        {searchContests.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex justify-center items-center text-red-400'>
            <h3>We couldn’t find any contests based on your search</h3>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-5'>
            {/* Contest Cards */}
            <AllContest sortedContests={searchContests} />
            <div className='text-center'>
              <Link className='btn btn-primary' to='/contests'>
                View More
              </Link>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
