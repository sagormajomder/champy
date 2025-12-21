import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAuth } from '../../../contexts/AuthContext';
import { useAxiosSecure } from '../../../hooks/useAxiosSecure';

export default function MyProfilePage() {
  const [isUpdated, setIsUpdated] = useState(false);
  const { user, updateUserProfile } = useAuth();
  const [photoPreview, setPhotoPreview] = useState(user?.photoURL);
  const axiosSecure = useAxiosSecure();

  const {
    data: userInfo = {},
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);

      return res.data;
    },
  });

  console.log(userInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      displayName: userInfo?.displayName || '',
      userBio: userInfo?.userBio || '',
    },
  });

  // Populate form once userInfo arrives
  useEffect(() => {
    if (isSuccess && userInfo) {
      reset({
        displayName: userInfo?.displayName ?? user?.displayName ?? '',
        userBio: userInfo?.userBio ?? '',
      });
    }
  }, [isSuccess, userInfo, reset, user]);

  // Update preview only when user selects a file
  function handlePhotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) {
      setPhotoPreview(userInfo?.photoURL ?? user?.photURL);
      return;
    }
    const nextUrl = URL.createObjectURL(file);
    setPhotoPreview(prev => {
      if (prev && prev.startsWith('blob:')) URL.revokeObjectURL(prev);
      return nextUrl;
    });
  }

  // Cleanup blob URL
  useEffect(() => {
    return () => {
      if (photoPreview?.startsWith('blob:')) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

  // Update User Information
  async function handleUpdateUser(data) {
    setIsUpdated(true);
    const { userBio, displayName, photo } = data;

    const imageFile = photo[0];

    const formData = new FormData();
    formData.append('image', imageFile);

    const photoResult = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_HOST_KEY
      }`,
      formData
    );

    const photoURL = photoResult.data.data.url;

    const updateUserInfo = {
      displayName,
      photoURL,
      userBio,
    };

    // Update into Firebase
    updateUserProfile({
      displayName,
      photoURL,
    })
      .then(async () => {
        // Update Into DB
        const res = await axiosSecure.patch(
          `/users/${userInfo?._id}`,
          updateUserInfo
        );
        // console.log(res);

        if (res.data.acknowledged) {
          setIsUpdated(false);
          toast.success('User Information is updated successfully!');
          refetch();
        }
      })
      .catch(error => {
        // console.log(error);
        toast.error(error.message);
      });
  }

  return (
    <section className='space-y-10'>
      <h1>My Profile Page</h1>
      <div className='space-y-3'>
        <h3>Update Information</h3>
        <form onSubmit={handleSubmit(handleUpdateUser)}>
          <fieldset className='fieldset'>
            {/* Photo Upload */}
            <div>
              <div className='w-65 mx-auto'>
                <label
                  htmlFor='image'
                  className='label flex flex-col items-center'>
                  <img
                    className='object-cover w-62.5 h-62.5 rounded-full cursor-pointer'
                    src={photoPreview}
                    alt=''
                  />
                  <span className='text-center'>Upload Photo</span>
                </label>
              </div>
              <input
                className='file-input hidden'
                type='file'
                {...register('photo', {
                  required: true,
                  onChange: handlePhotoChange,
                })}
                id='image'
              />
            </div>
            {errors.photo?.type === 'required' && (
              <span className='text-red-400 text-center'>
                Photo is required!
              </span>
            )}

            {/* User Name */}
            <label htmlFor='u-name' className='label'>
              User Name
            </label>
            <input
              type='text'
              {...register('displayName', { required: true })}
              className='input w-full'
              placeholder='User Name'
              id='u-name'
            />
            {errors.displayName?.type === 'required' && (
              <span className='text-red-400'>User Name is required!</span>
            )}
            {/* User Bio */}
            <label htmlFor='u-bio' className='label'>
              User Bio
            </label>

            <textarea
              className='textarea w-full'
              placeholder='User Bio'
              id='u-bio'
              {...register('userBio')}></textarea>

            <button disabled={isUpdated} className='btn btn-primary'>
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
