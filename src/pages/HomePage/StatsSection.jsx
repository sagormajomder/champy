import { motion } from 'motion/react';
import CountUp from 'react-countup';
import Container from '../../components/Container';

const stats = [
  { label: 'Total Contests', value: 1250, suffix: '+' },
  { label: 'Happy Winners', value: 3400, suffix: '+' },
  { label: 'Prize Money Paid', value: 250, suffix: 'K+' }, // Assuming currency or just value
  { label: 'Active Users', value: 15000, suffix: '+' },
];

export default function StatsSection() {
  return (
    <section className='py-16 bg-primary text-primary-content'>
      <Container>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-content/20'>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='p-4'>
              <div className='text-4xl md:text-5xl font-extrabold mb-2'>
                <CountUp end={stat.value} duration={2.5} separator=',' />
                {stat.suffix}
              </div>
              <p className='text-lg font-medium opacity-90'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
