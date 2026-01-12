import { motion } from 'motion/react';
import { Link } from 'react-router';
import Container from '../../components/Container';

export default function CTASection() {
  return (
    <section className='py-24 bg-base-100'>
      <Container>
        <div className='text-center max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl md:text-6xl font-extrabold mb-6 tracking-tight'>
              Ready to Showcase Your Talent?
            </h2>
            <p className='text-xl text-base-content/70 mb-10 max-w-2xl mx-auto'>
              Join thousands of users who are already winning prizes, building
              portfolios, and launching careers with Champy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contests'
                className='btn btn-primary btn-lg px-10 text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50'>
                Explore Contests
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
