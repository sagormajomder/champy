export default function TimelineSection() {
  return (
    <section className='w-full flex flex-col items-center py-10'>
      <h2 className='text-3xl font-bold mb-12 text-center'>Our Evolution</h2>
      <div className='grid grid-cols-[40px_1fr] gap-x-6 px-4'>
        {/* 2023 */}
        <div className='flex flex-col items-center gap-1 pt-1'>
          <div className='size-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 z-10'>
            <span className='material-symbols-outlined text-[20px]'>
              lightbulb
            </span>
          </div>
          <div className='w-[2px] bg-gray-200 dark:bg-gray-800 h-full grow min-h-20'></div>
        </div>
        <div className='flex flex-1 flex-col py-1 pb-10'>
          <div className='flex flex-col md:flex-row md:items-center gap-2 mb-2'>
            <p className='text-xl font-bold leading-normal'>
              Founded in a Garage
            </p>
            <span className='px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-slate-500 w-fit'>
              2023
            </span>
          </div>
          <p className='text-slate-500 dark:text-slate-400 text-base leading-relaxed'>
            Two designers realized that finding high-quality, fair design
            contests was nearly impossible. They sketched the first version of
            the platform on a napkin.
          </p>
        </div>
        {/* 2024 */}
        <div className='flex flex-col items-center gap-1'>
          <div className='w-[2px] bg-gray-200 dark:bg-gray-800 h-4'></div>
          <div className='size-10 rounded-full bg-[#f5f6f8] dark:bg-[#101622] border-2 border-primary flex items-center justify-center text-primary z-10'>
            <span className='material-symbols-outlined text-[20px]'>flag</span>
          </div>
          <div className='w-[2px] bg-gray-200 dark:bg-gray-800 h-full grow min-h-[80px]'></div>
        </div>
        <div className='flex flex-1 flex-col py-1 pb-10'>
          <div className='flex flex-col md:flex-row md:items-center gap-2 mb-2'>
            <p className='text-xl font-bold leading-normal'>
              First Contest Hosted
            </p>
            <span className='px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-slate-500 w-fit'>
              2024
            </span>
          </div>
          <p className='text-slate-500 dark:text-slate-400 text-base leading-relaxed'>
            We launched our beta with a single logo design contest. Over 500
            entries were submitted in the first week, proving the demand for a
            creator-centric platform.
          </p>
        </div>
        {/* 2025 */}
        <div className='flex flex-col items-center gap-1'>
          <div className='w-[2px] bg-gray-200 dark:bg-gray-800 h-4'></div>
          <div className='size-10 rounded-full bg-[#f5f6f8] dark:bg-[#101622] border-2 border-primary flex items-center justify-center text-primary z-10'>
            <span className='material-symbols-outlined text-[20px]'>
              groups
            </span>
          </div>
          <div className='w-[2px] bg-gray-200 dark:bg-gray-800 h-full grow min-h-[80px]'></div>
        </div>
        <div className='flex flex-1 flex-col py-1 pb-10'>
          <div className='flex flex-col md:flex-row md:items-center gap-2 mb-2'>
            <p className='text-xl font-bold leading-normal'>
              1 Million Users Reached
            </p>
            <span className='px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-slate-500 w-fit'>
              2025
            </span>
          </div>
          <p className='text-slate-500 dark:text-slate-400 text-base leading-relaxed'>
            The community exploded. We introduced video and coding challenges,
            becoming the go-to hub for diverse creative disciplines.
          </p>
        </div>
        {/* 2026 */}
        <div className='flex flex-col items-center gap-1'>
          <div className='w-[2px] bg-gray-200 dark:bg-gray-800 h-4'></div>
          <div className='size-10 rounded-full bg-[#f5f6f8] dark:bg-[#101622] border-2 border-primary flex items-center justify-center text-primary z-10'>
            <span className='material-symbols-outlined text-[20px]'>
              public
            </span>
          </div>
        </div>
        <div className='flex flex-1 flex-col py-1'>
          <div className='flex flex-col md:flex-row md:items-center gap-2 mb-2'>
            <p className='text-xl font-bold leading-normal'>Global Expansion</p>
            <span className='px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-slate-500 w-fit'>
              2026
            </span>
          </div>
          <p className='text-slate-500 dark:text-slate-400 text-base leading-relaxed'>
            With offices in 4 countries, we are now a truly global ecosystem,
            helping brands and creators connect across borders and time zones.
          </p>
        </div>
      </div>
    </section>
  );
}
