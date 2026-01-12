export default function ContestCardSkeleton() {
  return (
    <div className='rounded-xl shadow-xl flex flex-col justify-between bg-base-200 animate-pulse'>
      {/* Image Skeleton */}
      <div className='h-62.5 w-full bg-gray-400 rounded-t-lg'></div>

      {/* Content Skeleton */}
      <div className='px-5 pt-5 flex-1 flex flex-col justify-between'>
        <div>
          {/* Type Skeleton */}
          <div className='mb-4'>
            <div className='h-5 bg-gray-400 rounded w-24 mb-2'></div>
            {/* Title Skeleton */}
            <div className='space-y-2 mb-3'>
              <div className='h-6 bg-gray-400 rounded w-full'></div>
              <div className='h-6 bg-gray-400 rounded w-3/4'></div>
            </div>
          </div>

          {/* Description Skeleton */}
          <div className='space-y-2 mb-4'>
            <div className='h-4 bg-gray-400 rounded w-full'></div>
            <div className='h-4 bg-gray-400 rounded w-5/6'></div>
          </div>

          <div className='divider mt-2 mb-3'></div>

          {/* Stats Skeleton */}
          <div className='flex justify-between items-center mb-3'>
            <div className='flex gap-1 items-center'>
              <div className='h-5 w-5 bg-gray-400 rounded'></div>
              <div className='h-4 bg-gray-400 rounded w-8'></div>
            </div>
            <div className='flex gap-1 items-center'>
              <div className='h-5 w-5 bg-gray-400 rounded'></div>
              <div className='h-4 bg-gray-400 rounded w-20'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className='px-5 pb-5'>
        <div className='h-10 bg-gray-400 rounded w-full'></div>
      </div>
    </div>
  );
}
