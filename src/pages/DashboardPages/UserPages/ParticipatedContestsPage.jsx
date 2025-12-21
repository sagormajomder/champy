import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../../contexts/AuthContext';
import Loader from './../../../components/Loader';
import { useAxiosSecure } from './../../../hooks/useAxiosSecure';

export default function ParticipatedContestsPage() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: participatedContests = [], isPending } = useQuery({
    queryKey: ['contests', user?.email, 'paid'],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contests/participate?email=${user?.email}&paymentStatus=paid`
      );
      return res.data;
    },
  });

  // console.log(participatedContests);
  const { paymentStatus, contests, transactionIds } = participatedContests;

  if (isPending) return <Loader />;
  return (
    <section className='space-y-6'>
      <h1>My Participated Contests</h1>
      {/* Table */}
      <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Prize</th>
              <th>Fee</th>
              <th>Payment Status</th>
              <th>Transaction ID</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, i) => {
              const {
                _id,
                contestPhotoURL,
                contestName,
                contestType,
                contestPrice,
                contestPrize,
                contestDeadline,
              } = contest;
              return (
                <tr key={_id}>
                  <th>{i + 1}</th>
                  <th>
                    <img
                      className='w-15 h-15 object-cover '
                      src={contestPhotoURL}
                      alt={contestName}
                    />
                  </th>
                  <td>{contestName}</td>
                  <td>{contestType.split('_').join(' ').toUpperCase()}</td>
                  <td>TK {contestPrize}</td>
                  <td>TK {contestPrice}</td>
                  <td>
                    <span className={`badge badge-success`}>
                      {paymentStatus.toUpperCase()}
                    </span>
                  </td>
                  <td>{transactionIds[i]}</td>

                  <td>{new Date(contestDeadline).toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
