export default function ValuesSection() {
  return (
    <section className='w-full max-w-7xl px-4 md:px-10 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex flex-col gap-4 hover:border-primary/50 transition-colors group'>
          <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
            <span className='material-symbols-outlined'>visibility</span>
          </div>
          <h3 className='text-xl font-bold'>Radical Transparency</h3>
          <p className='text-slate-500 dark:text-slate-400'>
            We believe in clear rules and open judging processes. Every contest
            on our platform is built on trust.
          </p>
        </div>
        <div className='p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex flex-col gap-4 hover:border-primary/50 transition-colors group'>
          <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
            <span className='material-symbols-outlined'>palette</span>
          </div>
          <h3 className='text-xl font-bold'>Unbound Creativity</h3>
          <p className='text-slate-500 dark:text-slate-400'>
            We provide the canvas; you provide the art. We remove the
            administrative friction so creators can just create.
          </p>
        </div>
        <div className='p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex flex-col gap-4 hover:border-primary/50 transition-colors group'>
          <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
            <span className='material-symbols-outlined'>balance</span>
          </div>
          <h3 className='text-xl font-bold'>Fair Play for All</h3>
          <p className='text-slate-500 dark:text-slate-400'>
            Leveling the playing field for emerging talent. Whether you're a pro
            or a beginner, your work speaks for itself.
          </p>
        </div>
      </div>
    </section>
  );
}
