import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";

import Container from "../global/container";
import WaitlistForm from "./waitlist-form";

const Incentive = () => {
  return (
    <section className="py-10 lg:py-20" id="get-started">
      <Container className="max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Headline */}
          <h2 className="text-4xl xl:text-5xl font-medium mb-4">
            Ready to Know Your Worth?
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-2">
            Join the waitlist and be the first to access real salaries, honest
            reviews, and career insights — all completely free.
          </p>

          {/* Early Access Badge */}
          <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Early access launching soon
          </div>

          {/* Waitlist Form */}
          <WaitlistForm />

          {/* Supporting Link */}
          <div className="text-emerald-600 flex items-center hover:underline cursor-pointer text-sm font-medium mt-6">
            Learn more about Confam <PiArrowRight className="ml-2 text-sm" />
          </div>

          {/* Illustration */}
          <Image
            src="/assets/MessyDoodle.svg"
            alt="Get started with Confam"
            width={1000}
            height={1000}
            className="w-60 xl:w-80 pt-10"
          />
        </div>
      </Container>
    </section>
  );
};

export default Incentive;
