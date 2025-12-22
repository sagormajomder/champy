import { motion } from 'motion/react';
import { FaTrophy } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle';
import Container from './../../components/Container';

const winners = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    category: 'UI Design Challenge',
    prize: '2,500',
    image: 'https://i.pravatar.cc/150?img=5',
    isTop: false,
    color: 'text-blue-400',
    borderColor: 'border-green-500/50',
    trophyColor: 'text-yellow-500',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    category: 'Full Stack Hackathon',
    prize: '10,000',
    image: 'https://i.pravatar.cc/150?img=11',
    isTop: true,
    color: 'text-blue-500',
    borderColor: 'border-blue-500',
    trophyColor: 'text-blue-600',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    category: 'Digital Illustration',
    prize: '1,800',
    image: 'https://i.pravatar.cc/150?img=9',
    isTop: false,
    color: 'text-blue-400',
    borderColor: 'border-gray-400/50',
    trophyColor: 'text-gray-400',
  },
];

export default function WinnerAdvertiseSection() {
  return (
    <section className='py-20 bg-[#0F172A] text-white overflow-hidden relative'>
      {/* Background Glow Effects */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl translate-y-1/2'></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <SectionTitle
            title='Hall of Champions'
            desc='Meet the talented creators who topped the leaderboards this month.'
          />
        </motion.div>

        <div className='flex flex-col md:flex-row justify-center items-center md:items-end gap-6 md:gap-8'>
          {winners.map((winner, index) => (
            <motion.div
              key={winner.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-6 flex flex-col items-center text-center border border-white/5 backdrop-blur-sm
                ${
                  winner.isTop
                    ? 'bg-[#1E293B]/80 w-full max-w-sm md:w-96 h-[480px] order-first md:order-none z-10 shadow-2xl shadow-blue-500/10 border-blue-500/30'
                    : 'bg-[#1E293B]/40 w-full max-w-xs md:w-80 h-[400px] hover:bg-[#1E293B]/60 transition-colors'
                }
              `}>
              {winner.isTop && (
                <div className='absolute -top-5 bg-blue-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg shadow-blue-600/20'>
                  Top Performer
                </div>
              )}

              <div
                className={`relative mt-8 mb-6 ${
                  winner.isTop ? 'scale-110' : ''
                }`}>
                <div
                  className={`w-24 h-24 rounded-full p-1 border-2 ${winner.borderColor}`}>
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className='w-full h-full rounded-full object-cover'
                  />
                </div>
                <div
                  className={`absolute -top-1 -right-1 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shadow-lg ${winner.trophyColor}`}>
                  <FaTrophy size={14} />
                </div>
              </div>

              <h3
                className={`font-bold mb-1 ${
                  winner.isTop ? 'text-2xl' : 'text-xl'
                }`}>
                {winner.name}
              </h3>
              <p className={`text-sm mb-8 ${winner.color}`}>
                {winner.category}
              </p>

              <div className='mt-auto w-full border-t border-white/10 pt-6'>
                <p className='text-xs text-gray-400 uppercase tracking-wider mb-2'>
                  Total Winnings
                </p>
                <p
                  className={`font-bold ${
                    winner.isTop ? 'text-4xl' : 'text-3xl'
                  }`}>
                  TK. {winner.prize}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
