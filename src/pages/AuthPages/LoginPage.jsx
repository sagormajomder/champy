import GoogleLogin from './GoogleLogin';

import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import Container from './../../components/Container';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setIsLoading, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('In Login', location);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const watchedPassword = useWatch({
    control,
    name: 'password',
    defaultValue: '',
  });

  function handleLogin(data) {
    const { email, password } = data;

    signInUser(email, password)
      .then(userCreditial => {
        toast.success('user log in successfully!');
        navigate(location.state ?? '/');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === 'auth/invalid-email') {
          toast.error('Invalid email format. Please check your email.');
        } else if (errorCode === 'auth/invalid-credential') {
          toast.error(
            'User not found. Please enter correct email and password'
          );
        } else if (errorCode === 'auth/user-not-found') {
          toast.error('User not found. Please sign up first.');
        } else if (errorCode === 'auth/wrong-password') {
          toast.error('Wrong password. Please try again.');
        } else if (errorCode === 'auth/user-disabled') {
          toast.error('This user account has been disabled.');
        } else if (errorCode === 'auth/too-many-requests') {
          toast.error('Too many attempts. Please try again later.');
        } else if (errorCode === 'auth/network-request-failed') {
          toast.error('Network error. Please check your connection.');
        } else {
          toast.error(errorMessage || 'An unexpected error occurred.');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleDemoUserLogin() {
    setValue('email', 'user@gmail.com', { shouldValidate: true });
    setValue('password', 'User0%', { shouldValidate: true });
  }

  function handleDemoAdminLogin() {
    setValue('email', 'admin@gmail.com', { shouldValidate: true });
    setValue('password', 'Admin0%', { shouldValidate: true });
  }

  return (
    <section className='py-14'>
      <Container>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
          }}
          className='mx-auto max-w-2xl'>
          <h1 className=' '>Welcome Back</h1>
          <p className='ml-2 text-dark'>Login with Champy</p>

          {/* Form  */}
          <form
            className='card-body px-0 pb-1'
            onSubmit={handleSubmit(handleLogin)}>
            <fieldset className='fieldset'>
              {/* Email */}
              <label htmlFor='email' className='label'>
                Email
              </label>
              <input
                type='email'
                {...register('email', { required: true })}
                className='input w-full'
                placeholder='Email'
                id='email'
              />
              {errors.email?.type === 'required' && (
                <span className='text-red-400'>Email is required!</span>
              )}
              {/* Password */}
              <label htmlFor='pass' className='label'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z]).(?=.*\d).(?=.*[^A-Za-z0-9]).+$/,
                  })}
                  className='input w-full '
                  placeholder='Password'
                  id='pass'
                />

                {watchedPassword.length > 0 && (
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute top-1/2 right-3 z-10 -translate-y-1/2 cursor-pointer text-xl'>
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </button>
                )}
              </div>

              {errors.password?.type === 'required' && (
                <span className='text-red-400'>Password is required!</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className='text-red-400'>
                  Password must be at least 6 characters!
                </span>
              )}
              {errors.password?.type === 'pattern' && (
                <span className='text-red-400'>
                  Password must contain at least one uppercase, one lowercase
                  letter, one digit and one special characters!
                </span>
              )}
              {/* Forget Password */}
              <div>
                <Link className='link link-hover underline'>
                  Forgot password?
                </Link>
              </div>
              {/* Form Submit */}
              <div className='flex flex-col gap-2'>
                <button
                  type='submit'
                  disabled={isLoading}
                  className='btn btn-primary border-none text-dark'>
                  Login
                </button>
                <button
                  type='button'
                  onClick={() => handleDemoUserLogin()}
                  disabled={isLoading}
                  className='btn btn-primary btn-outline text-dark'>
                  Demo Login (User)
                </button>
                <button
                  type='button'
                  onClick={() => handleDemoAdminLogin()}
                  disabled={isLoading}
                  className='btn btn-primary btn-outline text-dark'>
                  Demo Login (Admin)
                </button>
              </div>
            </fieldset>
          </form>
          <p>
            Don't have any account?{' '}
            <Link
              state={location.state}
              to='/auth/register'
              className='hover:underline hover:text-secondary underline sm:no-underline'>
              Register
            </Link>
          </p>
          <div className='text-center my-4'>Or</div>
          {/* Google Login */}
          <GoogleLogin title='Login with Google' />
        </motion.div>
      </Container>
    </section>
  );
}
