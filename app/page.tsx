import HeroSection from '@/components/section/HeroSection';
import CommitmentSection from '@/components/section/commitment-section';
import ServicesSection from '@/components/section/ServicesSection';
import AboutSection from '@/components/section/about-section';
import ProcessSection from '@/components/section/process-section';
import ContactSection from '@/components/section/contact-section';
import TestimonialSection from '@/components/section/testimonial-section';
import Footer from '@/components/section/footer-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CommitmentSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
      <TestimonialSection />
      <Footer />
      
    </main>
  );
}