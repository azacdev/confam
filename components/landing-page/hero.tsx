import Image from "next/image";

import Container from "../global/container";
import WaitlistForm from "./waitlist-form";

const Hero = () => {
  return (
    <Container className="flex flex-col max-w-6xl md:items-center">
      {/* Main Headline */}
      <h1 className="px-8 pt-6 text-center text-5xl font-medium xl:pt-14 xl:text-6xl">
        Know Before You Go. <br className="hidden md:block" /> Every Company.
        Every Role.
      </h1>

      {/* Subheadline */}
      <p className="mx-auto w-2/3 pt-4 text-center text-xl text-muted-foreground md:text-2xl">
        Join thousands of professionals sharing salaries, company reviews, and{" "}
        <br className="hidden md:block" />
        career insights — completely anonymously.
      </p>

      {/* Waitlist Form */}
      <div className="flex items-center justify-center pt-8">
        <WaitlistForm />
      </div>

      {/* Hero Image */}
      <div className="flex items-center justify-center pt-10 xl:pt-20">
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="Professionals connecting anonymously"
          width={1000}
          height={1000}
          className="mx-auto w-60 xl:w-80"
        />
      </div>
    </Container>
  );
};

export default Hero;
