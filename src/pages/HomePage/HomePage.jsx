import AdvertiseSection from './AdvertiseSection';
import HeroBanner from './HeroBanner';
import PopularContestsSection from './PopularContestsSection';
import WinnerAdvertiseSection from './WinnerAdvertiseSection';

export default function HomePage() {
  return (
    <div className='space-y-14'>
      <HeroBanner />
      <PopularContestsSection />
      <WinnerAdvertiseSection />
      <AdvertiseSection />
    </div>
  );
}
