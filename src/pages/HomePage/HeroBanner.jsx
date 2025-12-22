import { motion } from 'motion/react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { contestCategories } from '../../utils/utils';

export default function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(
        `/search-contests?search=${searchQuery
          .trim()
          .split(' ')
          .join('_')
          .toLowerCase()}`
      );
    }
  };

  const handleCategoryClick = category => {
    navigate(`/search-contests?search=${category}`);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className='min-h-[65vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute inset-0 opacity-20 z-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl'></div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8 inline-block'>
          <span className='px-4 py-2 bg-blue-500/20 border border-blue-400 rounded-full text-blue-300 text-sm font-semibold uppercase tracking-wide'>
            NEW SEASON LIVE
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
          Unleash Your{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
            Creativity
          </span>{' '}
          & <span className='text-white'>Win Big</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto'>
          Join the world's largest community of creators. Discover contests,
          showcase your talent, and claim your prize.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='mb-12 flex gap-2 max-w-2xl mx-auto'>
          <div className='flex-1 relative'>
            <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder='Search contests (e.g., Logo Design)'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className='w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all'
            />
          </div>
          <button
            onClick={handleSearch}
            className='px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200'>
            Search
          </button>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='flex flex-wrap gap-3 justify-center'>
          {contestCategories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                handleCategoryClick(category.split(' ').join('_').toLowerCase())
              }
              className='px-6 py-2 bg-slate-700/50 border border-slate-600 text-gray-200 rounded-lg hover:border-blue-400 hover:text-blue-300 transition-all duration-200 font-medium'>
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
