import useRole from '../../../hooks/useRole';
import UserInfoUpdate from './UserInfoUpdate';
import WinningChart from './WinningChart';

export default function MyProfilePage() {
  const { role } = useRole();
  return (
    <section className='space-y-10'>
      <h1>My Profile Page</h1>
      <div
        className={`flex gap-20 md:gap-4  flex-col-reverse md:flex-row ${
          role !== 'user' ? 'justify-center' : 'justify-between'
        }`}>
        <UserInfoUpdate />
        {role === 'user' && <WinningChart />}
      </div>
    </section>
  );
}
