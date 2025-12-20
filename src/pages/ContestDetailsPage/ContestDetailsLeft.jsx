import InfoGrid from './InfoGrid';
import NormalDetails from './NormalDetails';

export default function ContestDetailsLeft({ contest }) {
  const { contestDesc, taskIns } = contest;
  return (
    <section className='basis-[65%] space-y-6'>
      {/* Contest Details and Task Info Section */}
      <NormalDetails title='About The Contest' desc={contestDesc} />
      <NormalDetails title='Task Instructions' desc={taskIns} />
      <InfoGrid contest={contest} />
    </section>
  );
}
