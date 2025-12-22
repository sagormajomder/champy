import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loader from '../../../components/Loader';
import { useAxiosSecure } from '../../../hooks/useAxiosSecure';

export default function ManageContestPage() {
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    data: contests = [],
    refetch,
  } = useQuery({
    queryKey: ['contests'],
    queryFn: async () => {
      const res = await axiosSecure.get('/contests');
      return res.data;
    },
  });
  // console.log(contests);

  async function handleContestStatus(id, status) {
    const statusInfo = { contestStatus: status };
    const res = await axiosSecure.patch(`/contests/${id}`, statusInfo);
    console.log(res);

    if (res.data.acknowledged) {
      toast.success('Contest status is updated successfully!');
      refetch();
    }
  }

  async function handleContestDelete(id) {
    const res = await axiosSecure.delete(`/contests/${id}`);
    if (res.data.acknowledged) {
      toast.success('Contest is Deleted Successfully!');
      refetch();
    }
  }

  if (isPending) return <Loader />;

  return (
    <section className='space-y-6'>
      <h1>Contest List</h1>

      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Hosted By</th>
              {/* <th>Description</th>
              <th>Task</th> */}
              <th>Entry Fee</th>
              <th>Prize Money</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, i) => {
              const {
                _id,
                contestName,
                contestPhotoURL,
                contestType,
                contestDesc,
                taskIns,
                contestPrice,
                contestPrize,
                contestDeadline,
                contestStatus,
                creatorName,
                creatorEmail,
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
                  {/* <td>{contestDesc}</td>
                  <td>{taskIns}</td> */}
                  <td>
                    <div className='flex flex-col gap-1'>
                      <span>{creatorName}</span>
                      <span>({creatorEmail})</span>
                    </div>
                  </td>
                  <td>{contestPrice}</td>
                  <td>{contestPrize}</td>
                  <td>{new Date(contestDeadline).toLocaleDateString()}</td>
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
                  <td>
                    {contestStatus === 'pending' ? (
                      <div className='flex gap-2 '>
                        <button
                          onClick={() => handleContestStatus(_id, 'confirmed')}
                          className='btn btn-primary '>
                          Confirm
                        </button>
                        <button
                          onClick={() => handleContestStatus(_id, 'rejected')}
                          className='btn btn-error'>
                          Reject
                        </button>
                        <button
                          onClick={() => handleContestDelete(_id)}
                          className='btn btn-warning'>
                          Delete
                        </button>
                      </div>
                    ) : (
                      <p>--</p>
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
