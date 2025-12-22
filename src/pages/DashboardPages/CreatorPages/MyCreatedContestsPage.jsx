import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import Loader from '../../../components/Loader';
import { useAuth } from '../../../contexts/AuthContext';
import { useAxiosSecure } from '../../../hooks/useAxiosSecure';

export default function MyCreatedContestsPage() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  console.log(user.email);

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
    <section className='space-y-6'>
      <h1>My Created Contests</h1>

      {contests.length === 0 ? (
        <div className='flex justify-center items-center text-red-400'>
          <h3>You have not create any contests yet 🙂</h3>
        </div>
      ) : (
        <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>SL.</th>
                <th>Image</th>
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
                  contestPhotoURL,
                  contestName,
                  contestType,
                  contestStatus,
                  contestPrice,
                  contestPrize,
                  contestDeadline,
                } = contest;
                return (
                  <tr key={_id}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        className='w-15 h-15 object-cover '
                        src={contestPhotoURL}
                        alt={contestName}
                      />
                    </td>
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
                    <td className=''>
                      {contestStatus === 'confirmed' ? (
                        <Link
                          to={`/dashboard/submissions/${_id}`}
                          className='btn btn-primary '>
                          See Submission
                        </Link>
                      ) : (
                        <div className='flex gap-2'>
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
                        </div>
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
