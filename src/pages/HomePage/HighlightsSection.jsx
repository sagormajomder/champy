import { motion } from 'motion/react';
import { FaFire, FaStopwatch } from 'react-icons/fa';
import { Link } from 'react-router';
import Container from '../../components/Container';

export default function HighlightsSection() {
  return (
    <section className='py-20'>
      <Container>
        <div className='bg-[#0F172A] rounded-3xl p-8 md:p-12 relative overflow-hidden text-white shadow-2xl'>
          {/* Background Effects */}
          <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2'></div>
          <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2'></div>

          <div className='relative z-10 flex flex-col lg:flex-row items-center gap-12'>
            <div className='flex-1 space-y-6'>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-bold uppercase tracking-wider'>
                <FaFire /> Hot Pick
              </div>
              <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
                Design the Future of Mobile Banking
              </h2>
              <p className='text-gray-300 text-lg leading-relaxed max-w-xl'>
                Join the biggest challenge of the month! Create a seamless and
                secure mobile banking experience and stand a chance to win
                massive prizes.
              </p>

              <div className='flex flex-wrap items-center gap-6'>
                <div className='flex items-center gap-2 text-yellow-400 font-bold'>
                  <span className='text-2xl'>TK. 5,000</span>
                  <span className='text-gray-400 font-normal'>Prize Pool</span>
                </div>
                <div className='w-px h-8 bg-white/10 hidden sm:block'></div>
                <div className='flex items-center gap-2 text-blue-400 font-bold'>
                  <FaStopwatch />
                  <span>Ends in 3 days</span>
                </div>
              </div>

              <div className='pt-4'>
                <Link
                  to='/contest-details/6964f24799df74277d12569e'
                  className='btn btn-primary border-none text-white px-8 py-3 rounded-xl hover:scale-105 transition-transform'>
                  Join Challenge Now
                </Link>
              </div>
            </div>

            <div className='flex-1 w-full max-w-lg'>
              <motion.div
                initial={{ opacity: 0, rotate: 5, y: 20 }}
                whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl rotate-3 opacity-50 blur-lg'></div>
                <img
                  src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
                  alt='Contest Highlight'
                  className='relative rounded-2xl shadow-lg w-full object-cover h-80 lg:h-96'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
