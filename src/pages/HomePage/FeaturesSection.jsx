import { motion } from 'motion/react';
import { FaBolt, FaGlobe, FaShieldAlt, FaUserFriends } from 'react-icons/fa';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';

const features = [
  {
    icon: FaBolt,
    title: 'Fast & Easy',
    desc: 'Launch or join contests in minutes with our intuitive platform.',
  },
  {
    icon: FaShieldAlt,
    title: 'Secure Platform',
    desc: 'Your data and payments are protected with top-tier security.',
  },
  {
    icon: FaUserFriends,
    title: 'Community Driven',
    desc: 'Connect with a global community of creators and competitors.',
  },
  {
    icon: FaGlobe,
    title: 'Global Reach',
    desc: 'Participate from anywhere in the world and showcase your talent.',
  },
];

export default function FeaturesSection() {
  return (
    <section className='py-20 bg-base-200'>
      <Container>
        <div className='text-center mb-12'>
          <SectionTitle
            title='Why Choose Champy?'
            desc='Experience the best platform for creative minds and competitive spirits.'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 text-center border border-base-300'>
              <div className='flex justify-center mb-6'>
                <div className='p-4 bg-primary/10 rounded-full text-primary'>
                  <feature.icon size={32} />
                </div>
              </div>
              <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
              <p className='text-base-content/70'>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
