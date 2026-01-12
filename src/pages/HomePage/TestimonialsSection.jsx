import { motion } from 'motion/react';
import { FaQuoteLeft } from 'react-icons/fa';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';

const testimonials = [
  {
    name: 'Sarah Jen',
    role: 'Graphic Designer',
    image: 'https://i.pravatar.cc/150?img=32',
    quote:
      "Champy has been a game-changer for my portfolio. I've won three contests and connected with amazing clients.",
  },
  {
    name: 'Michael Lee',
    role: 'Content Writer',
    image: 'https://i.pravatar.cc/150?img=12',
    quote:
      'The platform is incredibly easy to use, and the community is so supportive. Highly recommended for freelancers!',
  },
  {
    name: 'Jessica Wong',
    role: 'Digital Marketer',
    image: 'https://i.pravatar.cc/150?img=5',
    quote:
      'I found my first major client through a contest here. The exposure you get is unmatched.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className='py-20 bg-base-200'>
      <Container>
        <div className='text-center mb-16'>
          <SectionTitle
            title='What People Say'
            desc='Hear from our community of winners and creators.'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='card bg-base-100 shadow-xl p-8 border border-base-300 relative'>
              <FaQuoteLeft className='text-4xl text-primary/20 absolute top-6 left-6' />
              <p className='text-base-content/80 mb-6 italic relative z-10 pt-4'>
                "{testimonial.quote}"
              </p>
              <div className='flex items-center gap-4 mt-auto'>
                <div className='avatar'>
                  <div className='w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>
                <div>
                  <h4 className='font-bold text-lg'>{testimonial.name}</h4>
                  <p className='text-sm text-base-content/60'>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
