import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import { useAxiosSecure } from './../../hooks/useAxiosSecure';
import AllContest from './AllContest';
import AllContestSkeleton from './AllContestSkeleton';
import ContestCategories from './ContestCategories';
import ContestSort from './ContestSort';
import SearchContest from './SearchContest';

export default function AllContestPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('popular');
  const [page, setPage] = useState(1);
  const limit = 8;
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: [
      'contests',
      'confirmed',
      search,
      selectedCategory,
      sortOrder,
      page,
    ],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contests?status=confirmed&search=${search}&page=${page}&limit=${limit}&category=${selectedCategory}&sort=${sortOrder}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const contests = data?.contests || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / limit);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Reset page when filters change
  if (page > 1 && contests.length === 0 && !isPending && totalCount > 0) {
    setPage(1);
  }

  return (
    <section className='py-14 h-full'>
      <Container className='space-y-10'>
        <SectionTitle
          title='Explore Contests'
          desc="Discover, participate, and win in the world's most creative challenges. From Design to writing, find your next big win."
        />

        {/* Search and Sort */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <SearchContest
            setSearch={val => {
              setSearch(val);
              setPage(1);
            }}
          />

          <ContestSort
            sortOrder={sortOrder}
            setSortOrder={val => {
              setSortOrder(val);
              setPage(1);
            }}
          />
        </div>

        {/* Contest Category */}
        <ContestCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={val => {
            setSelectedCategory(val);
            setPage(1);
          }}
        />
        {/* Contest Cards */}
        {isPending ? (
          <AllContestSkeleton />
        ) : (
          <AllContest sortedContests={contests} />
        )}

        {/* Pagination Controls */}
        {!isPending && totalCount > limit && (
          <div className='flex justify-center items-center gap-4 mt-8'>
            <button
              className='btn btn-sm btn-outline btn-primary'
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}>
              Previous
            </button>
            <span className='text-sm font-medium'>
              Page {page} of {totalPages}
            </span>
            <button
              className='btn btn-sm btn-outline btn-primary'
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}>
              Next
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
