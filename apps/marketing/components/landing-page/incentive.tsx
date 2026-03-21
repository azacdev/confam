import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";

import Container from "../global/container";
import WaitlistForm from "./waitlist-form";
import { FadeIn } from "../global/fade-in";

const Incentive = () => {
  return (
    <section className="py-10 lg:py-20" id="get-started">
      <Container className="max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Headline */}
          <FadeIn delay={0.1}>
            <h2 className="text-4xl xl:text-5xl font-medium mb-4">
              Ready to Know Your Worth?
            </h2>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-2">
              Join the waitlist and be the first to access real salaries, honest
              reviews, and career insights — all completely free.
            </p>
          </FadeIn>

          {/* Early Access Badge */}
          <FadeIn
            delay={0.3}
            className="flex items-center gap-2 text-indigo-600 text-sm font-medium mb-8"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Early access launching soon
          </FadeIn>

          {/* Waitlist Form */}
          <FadeIn delay={0.4} className="w-full flex justify-center z-10">
            <WaitlistForm />
          </FadeIn>

          {/* Supporting Link */}
          <FadeIn
            delay={0.5}
            className="text-indigo-600 flex items-center hover:underline cursor-pointer text-sm font-medium mt-6"
          >
            Learn more about Confam <PiArrowRight className="ml-2 text-sm" />
          </FadeIn>

          {/* Illustration */}
          <FadeIn delay={0.6}>
            <Image
              src="/assets/MessyDoodle.svg"
              alt="Get started with Confam"
              width={1000}
              height={1000}
              className="w-60 xl:w-80 pt-10"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default Incentive;
