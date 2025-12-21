import UserInfoUpdate from './UserInfoUpdate';
import WinningChart from './WinningChart';

export default function MyProfilePage() {
  return (
    <section className='space-y-10'>
      <h1>My Profile Page</h1>
      <div className='flex gap-20 md:gap-4 justify-between flex-col-reverse md:flex-row'>
        <UserInfoUpdate />
        <WinningChart />
      </div>
    </section>
  );
}
