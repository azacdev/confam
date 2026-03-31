import Link from "next/link";
import Image from "next/image";
import { Button } from "@confam/ui";
import { Container } from "@confam/ui";
import Footer from "@/components/landing-page/footer";
import { Notch } from "@/components/landing-page/notch";

export default function NotFound() {
  return (
    <div className="relative min-h-dvh">
      {/* Dynamic Notch & Frame */}
      <Notch />

      <div className="relative flex min-h-dvh m-1.5 pt-14 rounded-3xl overflow-hidden bg-background selection:bg-primary/10 flex-col">
        <main className="flex flex-1 items-center justify-center">
          <Container className="flex flex-col items-center justify-center py-20 text-center xl:py-32">
            {/* Illustration */}
            <div className="relative mb-12 w-64 md:w-80">
              <Image
                src="/assets/ZombieingDoodle.svg"
                alt="404 - Lost in the void"
                width={1000}
                height={1000}
                className="mx-auto drop-shadow-sm"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-foreground">
              You&apos;re Lost in the <br className="hidden md:block" /> 404
              Void.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-lg text-lg text-muted-foreground md:text-xl">
              Looks like this page took an anonymous sabbatical.{" "}
              <br className="hidden md:block" />
              Don&apos;t worry, your career insights are safe at home.
            </p>

            {/* Action Button */}
            <div className="mt-10">
              <Link href="/">
                <Button size="lg" className={"px-4 sm:text-base"}>
                  Back to Safety
                </Button>
              </Link>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  );
}
