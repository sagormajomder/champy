import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../contexts/AuthContext';
import { useAxiosSecure } from '../../hooks/useAxiosSecure';
import { daysRemainingFunc } from '../../utils/utils';

export default function ContestStatusInfo({ contest }) {
  const { user } = useAuth();
  const {
    _id,
    contestName,
    contestPrice,
    contestDeadline,
    participatedCount,
    submissionCount,
  } = contest;
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const deadline = new Date(contestDeadline);
      const diff = deadline - now;

      if (diff <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = daysRemainingFunc(contestDeadline);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, [contestDeadline]);

  const isActive =
    timeRemaining.days > 0 ||
    timeRemaining.hours > 0 ||
    timeRemaining.minutes > 0;

  const formatTime = num => String(num).padStart(2, '0');

  const axiosSecure = useAxiosSecure();

  function handleContestRegister() {
    Swal.fire({
      title: 'Are you sure to join the contest?',
      text: `You will be charged TK ${contestPrice}!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3480fc',
      cancelButtonColor: '#de3b3d',
      confirmButtonText: 'Yes, continue payment & join it! ',
    }).then(result => {
      if (result.isConfirmed) {
        const paymentInfo = {
          contestId: _id,
          contestName,
          contestPrice,
          participatorEmail: user.email,
        };

        axiosSecure
          .post(`/create-checkout-session`, paymentInfo)
          .then(result => {
            const { url } = result.data;
            window.location.href = url;
          });
      }
    });
  }

  return (
    <div className='bg-base-100 rounded-xl p-6 shadow-lg border border-base-300'>
      {/* Status Info */}
      <div className='flex items-center gap-2 mb-6'>
        <span className='text-sm font-medium text-base-content'>Status</span>
        <span
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
            isActive ? 'bg-success/20 text-success' : 'bg-error/20 text-error'
          }`}>
          <span
            className={`w-2 h-2 rounded-full ${
              isActive ? 'bg-success' : 'bg-error'
            }`}></span>
          {isActive ? 'Active' : 'Ended'}
        </span>
      </div>

      {/* Time Remaining Section */}
      <div className='mb-8'>
        <h3 className='text-sm font-semibold text-base-content/70 mb-4 uppercase tracking-wide'>
          Time Remaining
        </h3>
        <div className='flex gap-4 items-center justify-between'>
          <div className='flex-1 bg-base-200 rounded-lg p-4 text-center'>
            <div className='text-2xl font-bold text-primary font-jakarta-sans'>
              {formatTime(timeRemaining.days)}
            </div>
            <div className='text-xs font-medium text-base-content/60 mt-1 uppercase'>
              Days
            </div>
          </div>
          <div className='text-xl font-bold text-base-content/30'>:</div>
          <div className='flex-1 bg-base-200 rounded-lg p-4 text-center'>
            <div className='text-2xl font-bold text-primary font-jakarta-sans'>
              {formatTime(timeRemaining.hours)}
            </div>
            <div className='text-xs font-medium text-base-content/60 mt-1 uppercase'>
              Hrs
            </div>
          </div>
          <div className='text-xl font-bold text-base-content/30'>:</div>
          <div className='flex-1 bg-base-200 rounded-lg p-4 text-center'>
            <div className='text-2xl font-bold text-primary font-jakarta-sans'>
              {formatTime(timeRemaining.minutes)}
            </div>
            <div className='text-xs font-medium text-base-content/60 mt-1 uppercase'>
              Mins
            </div>
          </div>
        </div>
      </div>

      {/* Register Contest Button */}
      <button
        onClick={handleContestRegister}
        className='btn btn-primary mb-1.5 w-full font-jakarta-sans'>
        Register Contest
        <span className='text-lg'>→</span>
      </button>

      {/* Contest Closes Info */}
      <p className='text-center text-xs text-base-content/60 mb-6 font-medium'>
        Contest closes{' '}
        {new Date(contestDeadline).toLocaleDateString('en-BD', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>

      {/* Statistics Info */}
      <div className='flex gap-6 pt-6 border-t border-base-300'>
        <div className='flex-1'>
          <div className='text-2xl font-bold text-primary font-jakarta-sans'>
            {participatedCount?.toLocaleString() || 0}
          </div>
          <div className='text-xs font-medium text-base-content/60 mt-1'>
            Participants
          </div>
        </div>
        <div className='flex-1'>
          <div className='text-2xl font-bold text-primary font-jakarta-sans'>
            {submissionCount || 0}
          </div>
          <div className='text-xs font-medium text-base-content/60 mt-1'>
            Submissions
          </div>
        </div>
      </div>
    </div>
  );
}
