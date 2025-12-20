import { useAxiosSecure } from '../../hooks/useAxiosSecure';
import ContestStatusInfo from './ContestStatusInfo';

export default function ContestDetailsRight({ contest }) {
  const axiosSecure = useAxiosSecure();

  return (
    <section className='space-y-4 basis-[35%]'>
      <ContestStatusInfo contest={contest} />
    </section>
  );
}
