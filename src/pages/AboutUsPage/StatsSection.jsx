export default function StatsSection() {
  return (
    <section className='w-full bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 md:px-10 py-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 mb-10'>
          <div>
            <h2 className='text-3xl font-bold leading-tight'>
              Impact by the Numbers
            </h2>
            <p className='text-slate-500 dark:text-slate-400 mt-2'>
              The real measure of our success is your success.
            </p>
          </div>
          <button className='text-primary font-bold text-sm hover:underline'>
            View Annual Report
          </button>
        </div>
        <div className='flex flex-wrap gap-4'>
          <div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-8 border border-gray-200 dark:border-gray-800 bg-[#f5f6f8] dark:bg-[#101622]'>
            <div className='flex items-center justify-between'>
              <span className='material-symbols-outlined text-primary text-3xl'>
                emoji_events
              </span>
              <span className='text-success text-sm font-bold bg-sutext-success/10 px-2 py-1 rounded-full'>
                +12%
              </span>
            </div>
            <p className='tracking-tight text-3xl font-bold leading-tight mt-4'>
              Tk. 2M+
            </p>
            <p className='text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal'>
              Prize Money Awarded
            </p>
          </div>
          <div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-8 border border-gray-200 dark:border-gray-800 bg-[#f5f6f8] dark:bg-[#101622]'>
            <div className='flex items-center justify-between'>
              <span className='material-symbols-outlined text-primary text-3xl'>
                contract_edit
              </span>
              <span className='text-success text-sm font-bold bg-sutext-success/10 px-2 py-1 rounded-full'>
                +8%
              </span>
            </div>
            <p className='tracking-tight text-3xl font-bold leading-tight mt-4'>
              50,000+
            </p>
            <p className='text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal'>
              Contests Created
            </p>
          </div>
          <div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-8 border border-gray-200 dark:border-gray-800 bg-[#f5f6f8] dark:bg-[#101622]'>
            <div className='flex items-center justify-between'>
              <span className='material-symbols-outlined text-primary text-3xl'>
                person_check
              </span>
              <span className='text-success text-sm font-bold bg-sutext-success/10 px-2 py-1 rounded-full'>
                +25%
              </span>
            </div>
            <p className='tracking-tight text-3xl font-bold leading-tight mt-4'>
              50k+
            </p>
            <p className='text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal'>
              Active participates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
