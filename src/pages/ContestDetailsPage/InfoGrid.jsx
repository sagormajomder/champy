export default function InfoGrid({ contest }) {
  const { contestPrice, contestPrize, contestDeadline, contestType } = contest;
  return (
    <div className='grid md:grid-cols-2 gap-4'>
      {/* Prize */}
      <div className='bg-base-200 rounded-xl p-5'>
        <h4 className='text-sm font-semibold text-base-content/60 mb-2'>
          Prize Pool
        </h4>
        <p className='text-2xl font-bold text-primary'>TK {contestPrize}</p>
      </div>

      {/* Entry Fee */}
      <div className='bg-base-200 rounded-xl p-5'>
        <h4 className='text-sm font-semibold text-base-content/60 mb-2'>
          Entry Fee
        </h4>
        <p className='text-2xl font-bold text-primary'>TK {contestPrice}</p>
      </div>

      {/* Deadline */}
      <div className='bg-base-200 rounded-xl p-5'>
        <h4 className='text-sm font-semibold text-base-content/60 mb-2'>
          Deadline
        </h4>
        <p className='text-lg font-semibold'>
          {new Date(contestDeadline).toLocaleDateString()}
        </p>
      </div>

      {/* Category */}
      <div className='bg-base-200 rounded-xl p-5'>
        <h4 className='text-sm font-semibold text-base-content/60 mb-2'>
          Category
        </h4>
        <p className='text-lg font-semibold'>
          {contestType.split('_').join(' ').toUpperCase()}
        </p>
      </div>
    </div>
  );
}
