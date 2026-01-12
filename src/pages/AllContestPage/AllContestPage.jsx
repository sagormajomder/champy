import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import { useAxiosSecure } from './../../hooks/useAxiosSecure';
import AllContest from './AllContest';
import AllContestSkeleton from './AllContestSkeleton';
import ContestCategories from './ContestCategories';
import SearchContest from './SearchContest';

export default function AllContestPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const axiosSecure = useAxiosSecure();
  const { isPending, data: contests = [] } = useQuery({
    queryKey: ['contests', 'confirmed', search],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contests?status=confirmed&search=${search}`
      );
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

  // if (isPending) return <Loader />;

  return (
    <section className='py-14 h-full'>
      <Container className='space-y-10'>
        <SectionTitle
          title='Explore Contests'
          desc="Discover, participate, and win in the world's most creative challenges. From Design to writing, find your next big win."
        />

        {/* Search */}
        <SearchContest setSearch={setSearch} />

        {/* Contest Category */}
        <ContestCategories
          contests={contests}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* Contest Cards */}
        {isPending ? (
          <AllContestSkeleton />
        ) : (
          <AllContest sortedContests={sortedContests} />
        )}
      </Container>
    </section>
  );
}
