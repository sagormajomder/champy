import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import Loader from '../../../components/Loader';
import { useAxiosSecure } from '../../../hooks/useAxiosSecure';

const NOW = Date.now();

export default function SubmissionsPage() {
  const { id: contestId } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    data: submissions = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['participates', contestId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/participates/${contestId}`);
      return res.data;
    },
  });

  console.log(submissions);

  async function handleDeclareWinner(participatorId) {
    const updateParticipator = {
      winner: true,
    };
    const res = await axiosSecure.patch(
      `/participates/${participatorId}?contestId=${contestId}`,
      updateParticipator
    );

    if (res.data.acknowledged) {
      toast.success('🎉 Hurray! Winner is declared');
      refetch();
    }
  }

  if (isPending) return <Loader />;

  return (
    <section className='space-y-6'>
      <h1>Contest Submissions</h1>
      {submissions.length === 0 ? (
        <p className='text-red-400'>
          The contestants have not yet submitted their entries.
        </p>
      ) : (
        // Table
        <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>SL.</th>
                <th>Participator Image</th>
                <th>Participator Name</th>
                <th>Participator Email</th>
                <th>Submitted Tasks</th>
                <th>Contest Deadline</th>
                <th>Winner Selection</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, i) => {
                const {
                  _id,
                  participatorPhotoURL,
                  participatorEmail,
                  participatorName,
                  submittedTask,
                  contestDeadline,
                  winner = false,
                  loser = false,
                } = submission;

                const isDeadlinePassed =
                  new Date(contestDeadline).getTime() < NOW;

                return (
                  <tr key={_id}>
                    <th>{i + 1}</th>
                    <th>
                      <img
                        className='w-10 h-10 object-cover rounded-full'
                        src={participatorPhotoURL}
                        alt={participatorName}
                      />
                    </th>
                    <td>{participatorName}</td>
                    <td>{participatorEmail}</td>
                    <td>{submittedTask}</td>
                    <td>{new Date(contestDeadline).toLocaleDateString()}</td>
                    <td>
                      {!isDeadlinePassed && (
                        <span className='text-sm text-gray-400 dark:text-warning'>
                          Not available yet
                        </span>
                      )}
                      {isDeadlinePassed && !winner && !loser && (
                        <button
                          className='btn btn-primary btn-sm'
                          onClick={() => handleDeclareWinner(_id)}>
                          Declare winner
                        </button>
                      )}

                      {isDeadlinePassed && winner && <span>🎉Winner</span>}
                      {isDeadlinePassed && loser && (
                        <span>🙂Try Next Time</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
