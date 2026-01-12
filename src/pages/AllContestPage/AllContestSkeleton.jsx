import ContestCardSkeleton from '../../components/ContestCardSkeleton';

export default function AllContestSkeleton({ count = 8 }) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 sm:gap-6'>
      {Array.from({ length: count }).map((_, index) => (
        <ContestCardSkeleton key={index} />
      ))}
    </section>
  );
}
