import AdvertiseSection from './AdvertiseSection';
import HeroBanner from './HeroBanner';
import PopularContestsSection from './PopularContestsSection';
import WinnerAdvertiseSection from './WinnerAdvertiseSection';

export default function HomePage() {
  return (
    <div className='space-y-10'>
      <HeroBanner />
      <PopularContestsSection />
      <WinnerAdvertiseSection />
      <AdvertiseSection />
    </div>
  );
}
