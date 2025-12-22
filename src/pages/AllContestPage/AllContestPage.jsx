import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import Container from '../../components/Container';
import Loader from '../../components/Loader';
import SectionTitle from '../../components/SectionTitle';
import { useAxiosSecure } from './../../hooks/useAxiosSecure';
import AllContest from './AllContest';
import ContestCategories from './ContestCategories';

export default function AllContestPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const axiosSecure = useAxiosSecure();
  const { isPending, data: contests = [] } = useQuery({
    queryKey: ['contests', 'confirmed'],
    queryFn: async () => {
      const res = await axiosSecure.get('/contests?status=confirmed');
      return res.data;
    },
  });

  const contestByCategory = contests.filter(contest => {
    if (selectedCategory === 'all') {
      return contest;
    }

    return contest.contestType === selectedCategory;
  });

  const sortedContests = contestByCategory.toSorted(
    (a, b) => b.participatedCount - a.participatedCount
  );

  // console.log(contests);
  // console.log(contestByCategory);
  // console.log(sortedContests);

  if (isPending) return <Loader />;

  return (
    <section className='py-14 h-full'>
      <Container className='space-y-10'>
        <SectionTitle
          title='Explore Contests'
          desc="Discover, participate, and win in the world's most creative challenges. From Design to writing, find your next big win."
        />
        {/* Contest Category */}
        <ContestCategories
          contests={contests}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* Contest Cards */}
        <AllContest sortedContests={sortedContests} />
      </Container>
    </section>
  );
}
