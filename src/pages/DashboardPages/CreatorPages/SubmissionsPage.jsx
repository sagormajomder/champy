import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import Loader from '../../../components/Loader';
import { useAxiosSecure } from '../../../hooks/useAxiosSecure';

const NOW = Date.now();

export default function SubmissionsPage() {
  const { id: contestId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: submissions = [], isPending } = useQuery({
    queryKey: ['participates', contestId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/participates/${contestId}`);
      return res.data;
    },
  });

  console.log(submissions);

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
                  participatorEmail,
                  participatorName,
                  submittedTask,
                  contestDeadline,
                } = submission;

                const isDeadlinePassed =
                  new Date(contestDeadline).getTime() < NOW;

                return (
                  <tr key={_id}>
                    <th>{i + 1}</th>
                    <td>{participatorName}</td>
                    <td>{participatorEmail}</td>
                    <td>{submittedTask}</td>
                    <td>{new Date(contestDeadline).toLocaleDateString()}</td>
                    <td>
                      {isDeadlinePassed ? (
                        <button
                          className='btn btn-primary btn-sm'
                          onClick={() => console.log('declare winner', _id)}>
                          Declare winner
                        </button>
                      ) : (
                        <span className='text-sm text-gray-400 dark:text-warning'>
                          Not available yet
                        </span>
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
