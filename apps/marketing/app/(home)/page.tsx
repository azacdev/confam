import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import SocialProof from "@/components/landing-page/social-proof";
import Incentive from "@/components/landing-page/incentive";
import Footer from "@/components/landing-page/footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <SocialProof />
      <Incentive />
      <Footer />
    </main>
  );
}
