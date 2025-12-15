import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import Loader from '../../../components/Loader';
import { useAuth } from '../../../contexts/AuthContext';
import { useAxiosSecure } from '../../../hooks/useAxiosSecure';

export default function MyCreatedContestsPage() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    data: contests = [],
    refetch,
  } = useQuery({
    queryKey: ['contests', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests?email=${user?.email}`);
      return res.data;
    },
  });

  // console.log(contests);

  if (isPending) return <Loader />;

  async function handleContestDelete(id) {
    const res = await axiosSecure.delete(`/contests/${id}`);
    if (res.data.acknowledged) {
      toast.success('Contest is Deleted Successfully!');
      refetch();
    }
  }

  return (
    <section>
      <h1 className='mb-6'>My Created Contests</h1>
      {/* Table */}
      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Fee</th>
              <th>Prize</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, i) => {
              const {
                _id,
                contestName,
                contestType,
                contestStatus,
                contestPrice,
                contestPrize,
                contestDeadline,
              } = contest;
              return (
                <tr key={_id}>
                  <th>{i + 1}</th>
                  <td>{contestName}</td>
                  <td>{contestType.split('_').join(' ').toUpperCase()}</td>
                  <td>
                    <span
                      className={`badge ${
                        contestStatus === 'pending'
                          ? 'badge-warning'
                          : contestStatus === 'confirmed'
                          ? 'badge-success'
                          : 'badge-error'
                      }`}>
                      {contestStatus.toUpperCase()}
                    </span>
                  </td>
                  <td>TK {contestPrice}</td>
                  <td>TK {contestPrize}</td>
                  <td>{new Date(contestDeadline).toLocaleDateString()}</td>
                  <td className='flex gap-2 flex-col lg:flex-row justify-center lg:justify-start'>
                    {contestStatus === 'confirmed' ? (
                      <Link className='btn btn-primary '>See Submission</Link>
                    ) : (
                      <>
                        <Link
                          to={`/dashboard/edit-contest/${_id}`}
                          className='btn btn-primary'>
                          Edit
                        </Link>
                        <button
                          onClick={() => handleContestDelete(_id)}
                          className='btn btn-secondary'>
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
