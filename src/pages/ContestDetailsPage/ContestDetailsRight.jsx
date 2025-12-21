import { useQuery } from '@tanstack/react-query';
import { useAxiosSecure } from '../../hooks/useAxiosSecure';
import ContestStatusInfo from './ContestStatusInfo';
import WinnerInfo from './WinnerInfo';

export default function ContestDetailsRight({ contest, contestRefetch }) {
  const axiosSecure = useAxiosSecure();

  const { data: winnerParticipator = null } = useQuery({
    queryKey: ['participates', contest._id, 'winner'],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/participates/${contest._id}?winner=true`
      );

      return res.data;
    },
  });

  return (
    <section className='space-y-4 basis-[35%]'>
      {winnerParticipator && (
        <WinnerInfo winnerParticipator={winnerParticipator} />
      )}
      <ContestStatusInfo contest={contest} contestRefetch={contestRefetch} />
    </section>
  );
}
