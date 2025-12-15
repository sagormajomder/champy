import { FiUsers } from 'react-icons/fi';
import { TbHistoryToggle } from 'react-icons/tb';
import { Link } from 'react-router';

export default function ContestCard({ contest }) {
  const {
    _id,
    contestPhotoURL,
    contestName,
    contestType,
    contestDesc,
    participateCount = 10,
    contestDeadline,
  } = contest;

  return (
    <div className='rounded-lg shadow-xl flex flex-col justify-between'>
      <div>
        <img
          className='h-62.5 w-full object-cover rounded-t-lg'
          src={contestPhotoURL}
          alt={contestName}
        />
        <div className='px-5 pt-5 '>
          <div className='mb-4'>
            <h6 className='text-primary'>{contestType.split('_').join(' ')}</h6>
            <h4 className='line-clamp-2 leading-8'>{contestName}</h4>
          </div>
          <p>{contestDesc.slice(0, 50)}...</p>
          <div className='divider mt-2 mb-3'></div>
          <div className='flex justify-between items-center mb-3'>
            <div className='flex gap-1 items-center'>
              <FiUsers className='text-primary text-lg' />
              <span>{participateCount}</span>
            </div>
            <div className='flex gap-1 items-center'>
              <TbHistoryToggle className='text-primary text-xl' />
              <span>{new Date(contestDeadline).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 pb-5'>
        <Link to={`/contest-details/${_id}`} className='btn btn-primary w-full'>
          View Details
        </Link>
      </div>
    </div>
  );
}
