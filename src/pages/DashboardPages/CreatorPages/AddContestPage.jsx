import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';

export default function AddContestPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contestDeadline: new Date(),
    },
  });

  function handleAddContest(data) {}
  return (
    <section className=''>
      <h1 className=' '>Create Contest</h1>
      <form
        className='card-body px-0 pb-1'
        onSubmit={handleSubmit(handleAddContest)}>
        <fieldset className='fieldset'>
          {/* Contest Name */}
          <label htmlFor='c-name' className='label'>
            Contest Name
          </label>
          <input
            type='text'
            {...register('contestName', { required: true })}
            className='input w-full'
            placeholder='Contest Name'
            id='c-name'
          />
          {errors.contestName?.type === 'required' && (
            <span className='text-red-400'>Contest Name is required!</span>
          )}

          {/* Contest Image Upload */}
          <label htmlFor='c-image' className='label'>
            Contest Image
          </label>
          <input
            className='file-input w-full'
            type='file'
            {...register('contestImage', { required: true })}
            id='c-image'
          />

          {errors.contestImage?.type === 'required' && (
            <span className='text-red-400'>Contest Image is required!</span>
          )}

          {/* Contest Description */}
          <label htmlFor='c-desc' className='label'>
            Contest Description
          </label>

          <textarea
            className='textarea w-full'
            placeholder='Contest Description'
            id='c-desc'
            {...register('contestDesc', { required: true })}></textarea>

          {errors.contestDesc?.type === 'required' && (
            <span className='text-red-400'>
              Contest Description is required!
            </span>
          )}

          {/* Contest Price */}
          <label htmlFor='c-price' className='label'>
            Contest Price
          </label>
          <input
            className='input w-full'
            type='number'
            placeholder='Contest Price'
            {...register('contestPrice', { required: true })}
            id='c-price'
          />

          {errors.contestPrice?.type === 'required' && (
            <span className='text-red-400'>Contest Image is required!</span>
          )}

          {/* Contest Prize Money */}
          <label htmlFor='c-prize' className='label'>
            Prize Money
          </label>
          <input
            className='input w-full'
            type='number'
            placeholder='Prize Money'
            {...register('contestPrize', { required: true })}
            id='c-prize'
          />

          {errors.contestPrize?.type === 'required' && (
            <span className='text-red-400'>
              Contest Prize Money is required!
            </span>
          )}

          {/* Contest Instruction */}
          <label htmlFor='c-task' className='label'>
            Task Instruction
          </label>

          <textarea
            className='textarea w-full'
            placeholder='Task Instruction'
            id='c-task'
            {...register('taskIns', { required: true })}></textarea>

          {errors.taskIns?.type === 'required' && (
            <span className='text-red-400'>
              Contest Task Instruction is required!
            </span>
          )}

          {/* Contest Type */}
          <label htmlFor='c-type' className='label'>
            Contest Type
          </label>
          <select
            defaultValue=''
            className='select w-full'
            id='c-type'
            {...register('contestType', { required: true })}>
            <option value='' disabled={true}>
              Select Contest Type
            </option>
            <option value='design_contest'>Design Contest</option>
            <option value='article_writing'>Article Writing</option>
          </select>
          {errors.contestType?.type === 'required' && (
            <span className='text-red-400'>Contest Type is required!</span>
          )}

          <label htmlFor='c-deadline' className='label'>
            Contest Deadline
          </label>

          <Controller
            control={control}
            name='contestDeadline'
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                showIcon
                toggleCalendarOnIconClick
                selected={field.value}
                onChange={date => field.onChange(date)}
                id='c-deadline'
                placeholderText='Select Contest Deadline'
                dateFormat='MMMM d, yyyy'
                minDate={new Date()}
                wrapperClassName='date-picker-wrapper'
              />
            )}
          />

          {errors.contestDeadline?.type === 'required' && (
            <span className='text-red-400'>Contest Deadline is required!</span>
          )}

          {/* Form Submit */}
          <button
            type='submit'
            className='btn btn-primary border-none text-dark mt-4'>
            Register
          </button>
        </fieldset>
      </form>
    </section>
  );
}
