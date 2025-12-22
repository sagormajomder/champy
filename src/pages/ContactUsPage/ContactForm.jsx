import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <div className='bg-base-200 p-8 rounded-3xl h-full border border-base-300'>
      <h2 className='text-2xl font-bold mb-8 text-base-content'>
        Send us a message
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-medium text-base-content/80'>
                First Name
              </span>
            </label>
            <input
              type='text'
              placeholder='Jane'
              className={`input input-bordered w-full bg-base-100 focus:border-primary focus:outline-none ${
                errors.firstName ? 'input-error' : ''
              }`}
              {...register('firstName', { required: 'First Name is required' })}
            />
            {errors.firstName && (
              <span className='text-error text-sm mt-1'>
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-medium text-base-content/80'>
                Last Name
              </span>
            </label>
            <input
              type='text'
              placeholder='Doe'
              className={`input input-bordered w-full bg-base-100 focus:border-primary focus:outline-none ${
                errors.lastName ? 'input-error' : ''
              }`}
              {...register('lastName', { required: 'Last Name is required' })}
            />
            {errors.lastName && (
              <span className='text-error text-sm mt-1'>
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text font-medium text-base-content/80'>
              Email Address
            </span>
          </label>
          <input
            type='email'
            placeholder='jane@example.com'
            className={`input input-bordered w-full bg-base-100 focus:border-primary focus:outline-none ${
              errors.email ? 'input-error' : ''
            }`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <span className='text-error text-sm mt-1'>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text font-medium text-base-content/80'>
              Topic
            </span>
          </label>
          <select
            className='select select-bordered w-full bg-base-100 focus:border-primary focus:outline-none font-normal text-base'
            defaultValue='General Inquiry'
            {...register('topic')}>
            <option value='General Inquiry'>General Inquiry</option>
            <option value='Technical Support'>Technical Support</option>
            <option value='Billing Question'>Billing Question</option>
            <option value='Partnership'>Partnership</option>
          </select>
        </div>

        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text font-medium text-base-content/80'>
              Message
            </span>
          </label>
          <textarea
            className={`textarea textarea-bordered h-32 w-full bg-base-100 focus:border-primary focus:outline-none text-base ${
              errors.message ? 'textarea-error' : ''
            }`}
            placeholder='How can we help you?'
            {...register('message', {
              required: 'Message is required',
            })}></textarea>
          {errors.message && (
            <span className='text-error text-sm mt-1'>
              {errors.message.message}
            </span>
          )}
        </div>

        <button className='btn btn-primary w-full text-lg normal-case mt-4'>
          Send Message
        </button>
      </form>
    </div>
  );
}
