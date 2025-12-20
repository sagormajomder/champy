import ContestStatusInfo from './ContestStatusInfo';
import InfoGrid from './InfoGrid';

export default function ContestDetailsRight({ contest }) {
  return (
    <section className='space-y-4 basis-[35%]'>
      <ContestStatusInfo contest={contest} />
      <InfoGrid contest={contest} />
    </section>
  );
}
