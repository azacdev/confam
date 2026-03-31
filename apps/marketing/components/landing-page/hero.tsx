"use client";

import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "@confam/backend";

import { Container } from "@confam/ui";
import WaitlistForm from "./waitlist-form";
import { FadeIn } from "../global/fade-in";
import { PiGithubLogoBold } from "react-icons/pi";

const Hero = () => {
  const pingMessage = useQuery(api.ping.ping);

  console.log("Ping Message", pingMessage);

  return (
    <Container className="flex flex-col max-w-6xl md:items-center">
      {/* Main Headline */}
      <FadeIn delay={0.1}>
        <h1 className="px-8 pt-6 text-center text-5xl font-medium xl:pt-14 xl:text-6xl">
          Know Before You Go. <br className="hidden md:block" /> Every Company.
          Every Role.
        </h1>
      </FadeIn>

      {/* Subheadline */}
      <FadeIn delay={0.2}>
        <p className="mx-auto w-full md:w-3/4 pt-4 text-center text-lg text-muted-foreground md:text-xl">
          Join thousands of professionals in Nigeria, Kenya, and across the
          continent sharing salaries, company reviews, and career insights —
          completely anonymously.
        </p>
      </FadeIn>

      {/* Waitlist Form */}
      <FadeIn
        delay={0.3}
        className="flex flex-col items-center justify-center pt-8 w-full z-10 gap-6"
      >
        <WaitlistForm />

        <a
          href="https://github.com/azacdev/confam"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <PiGithubLogoBold className="size-5" />
          Proudly Open Source — Star us on GitHub
        </a>
      </FadeIn>

      {/* Hero Image */}
      <FadeIn
        delay={0.4}
        className="flex items-center justify-center pt-10 xl:pt-20"
      >
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="Professionals connecting anonymously"
          width={1000}
          height={1000}
          className="mx-auto w-60 xl:w-80"
        />
      </FadeIn>
    </Container>
  );
};

export default Hero;
