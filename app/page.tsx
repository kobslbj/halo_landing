import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { HowSection } from "@/components/how-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <HowSection />
      <CTASection />
      <Footer />
    </div>
  );
}
