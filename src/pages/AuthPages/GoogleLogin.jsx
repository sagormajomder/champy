import { FcGoogle } from 'react-icons/fc';
export default function GoogleLogin({ title }) {
  function handleGoogleLogin() {}
  return (
    <button onClick={handleGoogleLogin} className='btn w-full '>
      <FcGoogle />
      {title}
    </button>
  );
}
