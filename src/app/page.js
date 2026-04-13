import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import SpeedSection from '../components/SpeedSection';
import StatsSection from '../components/StatsSection';
import SpecializedSection from '../components/SpecializedSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import ContentSection from '../components/ContentSection';
import FAQSection from '../components/FAQSection';
import { heroData } from '../data/heroData';

export default function Home() {
  return (
    <>
      <Hero data={heroData} />
      <TrustedBy />
      <Features />
      <SpeedSection />
      <StatsSection />
      <SpecializedSection />
      <TestimonialSection />
      <CTASection />
      <ContentSection />
      <FAQSection />
    </>
  );
}