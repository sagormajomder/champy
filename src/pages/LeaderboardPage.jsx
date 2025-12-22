import { useQuery } from '@tanstack/react-query';
import Loader from '../components/Loader';
import { useAxiosSecure } from '../hooks/useAxiosSecure';

export default function LeaderboardPage() {
  const axiosSecure = useAxiosSecure();
  const { data: winnerParticipators = [], isPending } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: async () => {
      const res = await axiosSecure.get('/leaderboard');
      return res.data;
    },
  });

  // console.log(winnerParticipators);

  const topThree = winnerParticipators.slice(0, 3);
  const others = winnerParticipators.slice(3);

  // Helper to safely get user at index
  const first = topThree[0];
  const second = topThree[1];
  const third = topThree[2];

  if (isPending) return <Loader />;

  return (
    <div className='min-h-screen bg-[#0B1120] text-white py-12 px-4'>
      <div className='max-w-5xl mx-auto'>
        {/* Top 3 Section */}
        <div className='flex justify-center items-end gap-4 md:gap-12 mb-16 pt-10'>
          {/* Rank 2 */}
          {second ? (
            <div className='flex flex-col items-center order-1'>
              <div className='relative mb-3'>
                <div className='w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#FFBCA2] overflow-hidden shadow-lg'>
                  <img
                    src={second.image}
                    alt={second.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#2A303C] border border-[#FFBCA2] text-[#FFBCA2] text-xs font-bold px-2 py-0.5 rounded-full shadow-md'>
                  #2
                </div>
              </div>
              <h3 className='mt-2 font-bold text-lg text-white'>
                {second.name}
              </h3>
              <p className='text-gray-400 text-xs'>{second.winCount} Wins</p>
            </div>
          ) : (
            <div className='w-24 order-1'></div> // Spacer
          )}

          {/* Rank 1 */}
          {first ? (
            <div className='flex flex-col items-center order-2 -mt-8 z-10 scale-110'>
              <div className='relative mb-3'>
                <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 text-5xl animate-bounce'>
                  👑
                </div>
                <div className='w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#FFD700] overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.4)]'>
                  <img
                    src={first.image}
                    alt={first.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-black font-bold text-sm px-4 py-1 rounded-full shadow-lg'>
                  #1
                </div>
              </div>
              <h3 className='mt-4 font-bold text-xl text-white'>
                {first.name}
              </h3>
              <p className='text-gray-400 text-sm'>{first.winCount} Wins</p>
            </div>
          ) : null}

          {/* Rank 3 */}
          {third ? (
            <div className='flex flex-col items-center order-3'>
              <div className='relative mb-3'>
                <div className='w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#CD7F32] overflow-hidden shadow-lg'>
                  <img
                    src={third.image}
                    alt={third.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#2A303C] border border-[#CD7F32] text-[#CD7F32] text-xs font-bold px-2 py-0.5 rounded-full shadow-md'>
                  #3
                </div>
              </div>
              <h3 className='mt-2 font-bold text-lg text-white'>
                {third.name}
              </h3>
              <p className='text-gray-400 text-xs'>{third.winCount} Wins</p>
            </div>
          ) : (
            <div className='w-24 order-3'></div> // Spacer
          )}
        </div>

        {/* List Section */}
        <div className='w-full'>
          <div className='grid grid-cols-12 text-gray-500 text-xs uppercase font-bold mb-4 px-6 tracking-wider'>
            <div className='col-span-2 md:col-span-1'>Rank</div>
            <div className='col-span-6 md:col-span-7'>User</div>
            <div className='col-span-2 text-right'>Win Rate</div>
            <div className='col-span-2 text-right'>Wins</div>
          </div>

          <div className='space-y-3'>
            {others.map((user, index) => (
              <div
                key={user._id}
                className='grid grid-cols-12 items-center bg-[#1E293B] hover:bg-[#263348] rounded-xl p-4 transition-all duration-300 shadow-sm border border-gray-800'>
                <div className='col-span-2 md:col-span-1 font-bold text-gray-400 pl-2'>
                  {index + 4}
                </div>
                <div className='col-span-6 md:col-span-7 flex items-center gap-4'>
                  <div className='w-10 h-10 rounded-full overflow-hidden border border-gray-600'>
                    <img
                      src={user.image}
                      alt={user.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <span className='font-semibold text-gray-200 truncate'>
                    {user.name}
                  </span>
                </div>
                <div className='col-span-2 text-right text-gray-400 font-medium'>
                  {/* Mocking win rate */}
                  {Math.round((user.winCount / (user.winCount + 2)) * 100)}%
                </div>
                <div className='col-span-2 text-right font-bold text-white pr-2'>
                  {user.winCount}
                </div>
              </div>
            ))}

            {/* Is other exits or not */}
            {others.length === 0 && winnerParticipators.length > 3 && (
              <div className='text-center text-gray-500 py-8'>
                End of leaderboard
              </div>
            )}
            {winnerParticipators.length <= 3 &&
              winnerParticipators.length > 0 && (
                <div className='text-center text-gray-500 py-8'>
                  No other participants to show
                </div>
              )}
            {winnerParticipators.length === 0 && (
              <div className='text-center text-gray-500 py-8'>
                No participants found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
