import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { HowSection } from "@/components/how-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { getWaitlistCount } from "@/app/actions";

export default async function LandingPage() {
  const { count } = await getWaitlistCount();

  return (
    <div>
      <HeroSection waitlistCount={count} />
      <ProblemSection />
      <HowSection />
      <CTASection />
      <Footer />
    </div>
  );
}
