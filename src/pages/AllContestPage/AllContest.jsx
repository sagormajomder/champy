import ContestCard from '../../components/ContestCard';

export default function AllContest({ sortedContests }) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 sm:gap-6'>
      {sortedContests.map(contest => (
        <ContestCard key={contest._id} contest={contest} />
      ))}
    </section>
  );
}
