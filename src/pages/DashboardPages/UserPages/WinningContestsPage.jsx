import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader';
import { useAuth } from '../../../contexts/AuthContext';
import { useAxiosSecure } from './../../../hooks/useAxiosSecure';

export default function WinningContestsPage() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: winningContests = [], isPending } = useQuery({
    queryKey: ['contests', user?.email, 'winner'],
    queryFn: async () => {
      const res = await axiosSecure(
        `/contests/winner-participator?email=${user?.email}`
      );

      return res.data;
    },
  });

  // console.log(winningContests);

  if (isPending) return <Loader />;

  return (
    <section className='space-y-6'>
      <h1>My Winning Contest</h1>
      {winningContests.length === 0 ? (
        <div className='flex justify-center items-center text-red-400'>
          <h3>You have not won any contests yet 🙂</h3>
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
                <th>Fee</th>
                <th>Win Reward</th>
              </tr>
            </thead>
            <tbody>
              {winningContests.map((winCon, i) => {
                const {
                  _id,
                  contestPhotoURL,
                  contestPrize,
                  contestName,
                  contestType,
                  contestPrice,
                } = winCon;
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
                    <td>TK. {contestPrice}</td>
                    <td>TK. {contestPrize}</td>
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
