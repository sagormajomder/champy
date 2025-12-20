import NormalDetails from './NormalDetails';

export default function ContestDetailsLeft({ contest }) {
  const { contestDesc, taskIns } = contest;
  return (
    <section className='basis-[65%] space-y-4'>
      {/* Contest Details and Task Info Section */}
      <NormalDetails title='About The Contest' desc={contestDesc} />
      <NormalDetails title='Task Instructions' desc={taskIns} />
    </section>
  );
}
