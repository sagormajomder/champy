import { motion } from 'motion/react';
import { Link } from 'react-router';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import { contestCategories } from '../../utils/utils';

export default function HomeCategoriesSection() {
  // Map categories to images (using dummy images for now or generic ones)
  const getCategoryImage = index => {
    const images = [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Graphic Design
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2066&auto=format&fit=crop', // Writing
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop', // Game
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', // Business
    ];
    return images[index % images.length];
  };

  return (
    <section className='py-20'>
      <Container>
        <div className='text-center mb-12'>
          <SectionTitle
            title='Explore Categories'
            desc='Find the perfect contest category that matches your skills.'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {contestCategories.map((category, index) => (
            <Link to={`/contests`} key={index} className='block group'>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='relative overflow-hidden rounded-2xl h-64 shadow-lg'>
                <img
                  src={getCategoryImage(index)}
                  alt={category}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-6'>
                  <h3 className='text-2xl font-bold text-white tracking-wide group-hover:text-primary-300 transition-colors'>
                    {category}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
