import { motion } from 'motion/react';
import Container from '../../components/Container';

export default function AdvertiseSection() {
  return (
    <section className='py-14'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-5xl font-bold mb-6 leading-tight'>
              Why Join Champy?
            </h2>
            <p className='text-gray-400 mb-12 text-lg leading-relaxed max-w-lg'>
              We're not just a platform; we're a launchpad for your career.
              Whether you're a seasoned pro or just starting out, there's a
              place for you here.
            </p>

            <div className='grid grid-cols-2 gap-y-10 gap-x-8'>
              <div>
                <h3 className='text-4xl font-bold text-blue-600 mb-2'>50k+</h3>
                <p className='text-gray-400 font-medium'>Active Participates</p>
              </div>
              <div>
                <h3 className='text-4xl font-bold text-blue-600 mb-2'>
                  TK. 2M+
                </h3>
                <p className='text-gray-400 font-medium'>Prize Money Paid</p>
              </div>
              <div>
                <h3 className='text-4xl font-bold text-blue-600 mb-2'>150+</h3>
                <p className='text-gray-400 font-medium'>Weekly Contests</p>
              </div>
              <div>
                <h3 className='text-4xl font-bold text-blue-600 mb-2'>24h</h3>
                <p className='text-gray-400 font-medium'>Support Team</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] shadow-2xl'>
            <img
              src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
              alt='Team collaboration'
              className='w-full h-full object-cover'
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10'>
              <blockquote className='text-xl md:text-2xl italic text-white mb-8 font-light leading-relaxed'>
                "Winning the Design Sprint 2023 changed my life. I got noticed
                by top agencies and landed my dream job."
              </blockquote>

              <div className='flex items-center gap-4'>
                <img
                  src='https://images.unsplash.com/photo-1722322426803-101270837197?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='David Miller'
                  className='w-14 h-14 rounded-full object-cover border-2 border-white/50'
                />
                <div>
                  <h4 className='font-bold text-white text-lg'>
                    Sagor Majomder
                  </h4>
                  <p className='text-sm text-gray-300'>Full Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
