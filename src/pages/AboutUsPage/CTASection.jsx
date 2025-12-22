import { Link } from 'react-router';

export default function CTASection() {
  return (
    <section className='w-full px-4 md:px-10 py-16 mb-10'>
      <div className='max-w-5xl mx-auto rounded-xl md:rounded-3xl bg-primary text-white p-10 md:p-20 relative overflow-hidden'>
        {/* decorative circles */}
        <div className='absolute top-0 right-0 -mr-20 -mt-20 size-64 rounded-full bg-white/10 blur-3xl'></div>
        <div className='absolute bottom-0 left-0 -ml-20 -mb-20 size-64 rounded-full bg-black/10 blur-3xl'></div>
        <div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
              Ready to write your own story?
            </h2>
            <p className='text-primary-100 text-lg md:text-xl max-w-lg opacity-90'>
              Join thousands of creators and brands making history on our
              platform today.
            </p>
          </div>
          <div className='flex flex-col gap-3 min-w-[200px]'>
            <button className='bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg'>
              Start Hosting
            </button>
            <Link
              to='/contests'
              className='bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors'>
              Join a Contest
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
