import { FiClock } from 'react-icons/fi';
import { daysRemainingFunc } from './../../utils/utils';
export default function ContestBanner({ contest }) {
  const {
    contestName,
    contestPhotoURL,
    contestType,
    creatorName,
    contestDeadline,
  } = contest;

  const daysRemaining = daysRemainingFunc(contestDeadline);

  return (
    <section className='relative h-100 overflow-hidden rounded-2xl'>
      <img
        src={contestPhotoURL}
        alt={contestName}
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-linear-to-t from-black to-transparent'></div>

      {/* Bottom Content */}
      <div className='absolute bottom-6 left-6  right-2 xs:right-6'>
        {/* Top Badges */}
        <div className='flex gap-1 xs:gap-3 flex-col xs:flex-row '>
          {/* Category Badge */}
          <span className='badge bg-warning/90 text-warning-content badge-lg gap-2 font-semibold text-sm px-4 py-3 border-0'>
            {contestType.split('_').join(' ').toUpperCase()}
          </span>
          {/* Deadline Badge */}
          {daysRemaining > 0 && (
            <span className='badge bg-error/90 text-error-content badge-lg gap-2 font-semibold text-sm px-4 py-3 border-0'>
              <FiClock className='text-base' />
              Ends in {daysRemaining} days
            </span>
          )}
          {daysRemaining == 0 && (
            <span className='badge bg-error/90 text-error-content badge-lg gap-2 font-semibold text-sm px-4 py-3 border-0'>
              Contest Ended
            </span>
          )}
        </div>

        {/* Contest Name */}
        <h1 className='text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg'>
          {contestName}
        </h1>
        {/* Creator name */}
        <div className='flex items-center gap-2 text-white/90'>
          <div className='w-2 h-2 rounded-full bg-success'></div>
          <p className='text-base font-medium'>Hosted by {creatorName}</p>
        </div>
      </div>
    </section>
  );
}
