import { FaGithub, FaTwitter } from 'react-icons/fa';
import { FiMail, FiMessageSquare, FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router';

export default function ContactInfo() {
  return (
    <div className='flex flex-col justify-between h-full space-y-8'>
      <div>
        <h3 className='text-primary font-bold tracking-wide uppercase text-sm mb-4'>
          Support
        </h3>
        <h1 className='text-5xl font-bold mb-6 text-base-content'>
          Get in touch
        </h1>
        <p className='text-base-content/70 text-lg leading-relaxed max-w-md'>
          Have questions about hosting a contest or participating in one? Our
          team is here to help you every step of the way.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          {/* Email Support Card */}
          <div className='p-6 rounded-box border border-base-300 bg-base-100 hover:border-primary/50 transition-colors duration-300'>
            <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4'>
              <FiMail className='w-5 h-5' />
            </div>
            <h3 className='font-bold text-lg mb-1'>Email Support</h3>
            <p className='text-sm text-base-content/60 mb-3'>
              support@contestplatform.com
            </p>
            <Link
              to='mailto:support@contestplatform.com'
              className='text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all'>
              Send an email &rarr;
            </Link>
          </div>

          {/* Live Chat Card */}
          <div className='p-6 rounded-box border border-base-300 bg-base-100 hover:border-primary/50 transition-colors duration-300'>
            <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4'>
              <FiMessageSquare className='w-5 h-5' />
            </div>
            <h3 className='font-bold text-lg mb-1'>Live Chat</h3>
            <p className='text-sm text-base-content/60 mb-3'>
              Mon-Fri, 9am - 5pm EST
            </p>
            <Link
              to='#'
              className='text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all'>
              Start chatting &rarr;
            </Link>
          </div>
        </div>

        {/* Follow Us Card */}
        <div className='mt-4 p-6 rounded-box border border-base-300 bg-base-100 flex items-center justify-between group hover:border-primary/50 transition-colors duration-300'>
          <div className='flex items-center gap-4'>
            <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary'>
              <FiShare2 className='w-5 h-5' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Follow Us</h3>
              <p className='text-sm text-base-content/60'>
                Stay updated on social media.
              </p>
            </div>
          </div>
          <div className='flex gap-4 text-base-content/40'>
            <Link
              href='#'
              className='hover:text-primary transition-colors text-xl'
              aria-label='Twitter'>
              <FaTwitter />
            </Link>
            <Link
              href='#'
              className='hover:text-primary transition-colors text-xl'
              aria-label='GitHub'>
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      <div className='text-base-content/60 text-sm'>
        Looking for something else?{' '}
        <Link to='#' className='text-primary font-semibold hover:underline'>
          Check out our Help Center
        </Link>{' '}
        for common questions.
      </div>
    </div>
  );
}
