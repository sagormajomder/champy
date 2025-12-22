import Container from '../../components/Container';
import CTASection from './CTASection';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import TeamSection from './TeamSection';
import TestimonialsSection from './TestimonialsSection';
import TimelineSection from './TimelineSection';
import ValuesSection from './ValuesSection';

export default function AboutUsPage() {
  return (
    <section className='py-14'>
      <Container className='space-y-10'>
        <HeroSection />
        <ValuesSection />
        <TimelineSection />
        <StatsSection />
        <TestimonialsSection />
        <TeamSection />
        <CTASection />
      </Container>
    </section>
  );
}
