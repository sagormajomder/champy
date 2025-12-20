import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useAuth } from '../../contexts/AuthContext';
import { useAxiosSecure } from '../../hooks/useAxiosSecure';
import { daysRemainingFunc } from '../../utils/utils';

export default function ContestStatusInfo({ contest }) {
  const [isCreated, setIsCreated] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const taskModalRef = useRef(null);

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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

  // get participate info
  const { data: payment = null } = useQuery({
    queryKey: ['payments', _id, user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments?contestId=${_id}&email=${user?.email}`
      );
      return res.data;
    },
  });

  // get participate task submit info

  const { data: submittedTask = null } = useQuery({
    queryKey: ['submissions', _id, user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/submissions?contestId=${_id}&email=${user?.email}`
      );
      return res.data;
    },
  });

  // console.log(submittedTask);

  const isActive =
    timeRemaining.days > 0 ||
    timeRemaining.hours > 0 ||
    timeRemaining.minutes > 0;

  // Calculate CountDown
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
    const interval = setInterval(calculateTimeRemaining, 10000);
    return () => clearInterval(interval);
  }, [contestDeadline]);

  // handle modal open and close
  useEffect(() => {
    const dialog = taskModalRef.current;
    if (!dialog) return;

    if (isTaskModalOpen && !dialog.open) dialog.showModal();
    if (!isTaskModalOpen && dialog.open) dialog.close();
  }, [isTaskModalOpen]);

  const formatTime = num => String(num).padStart(2, '0');

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
          participatorEmail: user?.email,
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

  async function handleTaskSubmit(data) {
    setIsCreated(true);
    const newTaskSubmission = {
      contestId: _id,
      participatorName: user?.displayName,
      participatorEmail: user?.email,
      submittedTask: data.taskContent,
    };

    const res = await axiosSecure.post('/submissions', newTaskSubmission);
    console.log(res);

    if (res.data.insertedId) {
      reset();
      setIsCreated(false);
      toast.success('Successfully Task Submitted!');
      setIsTaskModalOpen(false);
    }
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
      {!payment && !submittedTask && (
        <button
          onClick={handleContestRegister}
          disabled={!isActive}
          className='btn btn-primary mb-1.5 w-full font-jakarta-sans'>
          {isActive ? 'Register Contest' : 'Contest Ended'}
          {isActive && <span className='text-lg'>→</span>}
        </button>
      )}

      {payment && !submittedTask && (
        <button
          onClick={() => setIsTaskModalOpen(true)}
          disabled={!isActive}
          className='btn btn-primary mb-1.5 w-full font-jakarta-sans'>
          {isActive ? 'Submit contest task' : 'Contest Ended'}
          {isActive && <span className='text-lg'>→</span>}
        </button>
      )}

      {payment && submittedTask && (
        <button
          disabled={true}
          className='btn btn-primary mb-1.5 w-full font-jakarta-sans'>
          Already Submitted
        </button>
      )}

      {/* Submit Task Modal */}
      <dialog ref={taskModalRef} className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit(handleTaskSubmit)}>
            <textarea
              className='textarea w-full'
              {...register('taskContent', { required: true })}></textarea>
            {errors.taskContent?.type === 'required' && (
              <span className='text-error'>Task Information is required!</span>
            )}
            <div className='flex justify-between items-center'>
              <button disabled={isCreated} className='btn btn-primary'>
                Submit
              </button>
              <button
                type='button'
                onClick={() => setIsTaskModalOpen(false)}
                className='btn btn-outline btn-primary'>
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>

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
