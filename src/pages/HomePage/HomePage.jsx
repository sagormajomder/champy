import AdvertiseSection from './AdvertiseSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import FeaturesSection from './FeaturesSection';
import HeroBanner from './HeroBanner';
import HighlightsSection from './HighlightsSection';
import HomeCategoriesSection from './HomeCategoriesSection';
import NewsletterSection from './NewsletterSection';
import PopularContestsSection from './PopularContestsSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import WinnerAdvertiseSection from './WinnerAdvertiseSection';

export default function HomePage() {
  return (
    <div className='bg-base-100'>
      <HeroBanner />
      <HighlightsSection />
      <StatsSection />
      <HomeCategoriesSection />
      <PopularContestsSection />
      <FeaturesSection />
      <WinnerAdvertiseSection />
      <TestimonialsSection />
      <AdvertiseSection />
      {/* <FAQSection /> */}
      <CTASection />
      <NewsletterSection />
    </div>
  );
}
