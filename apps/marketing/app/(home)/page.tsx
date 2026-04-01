import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import SocialProof from "@/components/landing-page/social-proof";
import Incentive from "@/components/landing-page/incentive";
import Footer from "@/components/landing-page/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confam - Anonymous Salary & Career Insights",
  description:
    "Share and discover verified salaries, honest company reviews, and authentic career insights from professionals across Africa. Completely anonymously.",
};

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
