import { motion } from 'motion/react';
import toast from 'react-hot-toast';
import { FaEnvelope } from 'react-icons/fa';
import Container from '../../components/Container';

export default function NewsletterSection() {
  function handleSubscribe(e) {
    e.preventDefault();
    toast.success('Successfully subscribe to the Newsletter ');
  }
  return (
    <section className='py-24 bg-gradient-to-br from-primary to-secondary text-primary-content relative overflow-hidden'>
      {/* Background Shapes */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2'></div>

      <Container>
        <div className='max-w-3xl mx-auto text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 backdrop-blur-sm'>
              <FaEnvelope className='text-3xl' />
            </div>
            <h2 className='text-3xl md:text-5xl font-bold mb-4'>
              Stay in the Loop
            </h2>
            <p className='text-lg mb-8 opacity-90'>
              Subscribe to our newsletter to get the latest updates on new
              contests, winners, and special offers.
            </p>

            <form
              className='flex flex-col sm:flex-row gap-3'
              onSubmit={handleSubscribe}>
              <input
                type='email'
                placeholder='Enter your email address'
                className='input input-lg w-full bg-white/10 border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:border-white'
                required
              />
              <button className='btn btn-lg bg-white text-primary hover:bg-white/90 border-none'>
                Subscribe
              </button>
            </form>
            <p className='text-sm mt-4 opacity-70'>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
