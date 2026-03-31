import Image from "next/image";
import {
  PiQuotesFill,
  PiUsersThreeFill,
  PiGlobeFill,
  PiShieldCheckFill,
} from "react-icons/pi";

import { Container } from "@confam/ui";
import { FadeIn } from "../global/fade-in";

// Community stats
const communityStats = [
  {
    icon: <PiUsersThreeFill className="text-2xl text-indigo-600" />,
    value: "1,500+",
    label: "Waitlist Members",
  },
  {
    icon: <PiGlobeFill className="text-2xl text-blue-600" />,
    value: "35+",
    label: "Companies Joined",
  },
  {
    icon: <PiShieldCheckFill className="text-2xl text-purple-600" />,
    value: "100%",
    label: "Anonymity Guaranteed",
  },
];

// Testimonials from early access users
const testimonials = [
  {
    quote:
      "Salary negotiations in Lagos are practically a black box. GetConfam is the tool I've been waiting for to finally know my market value.",
    name: "Adaeze M.",
    role: "Product Manager (Waitlist Member)",
    image: "/assets/GroovySittingDoodle.svg",
  },
  {
    quote:
      "Verified, anonymous reviews are the only way to get the real truth about our workspaces. This is long overdue for the African tech ecosystem.",
    name: "Kwame O.",
    role: "Software Engineer (Waitlist Member)",
    image: "/assets/SittingDoodle.svg",
  },
];

const SocialProof = () => {
  return (
    <section className="py-10 lg:py-20" id="social-proof">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <FadeIn delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl xl:text-5xl font-medium mb-4">
            The Movement for Transparency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionals across Africa are joining the waitlist to solve the
            information gap and level the playing field.
          </p>
        </FadeIn>

        {/* Featured Testimonial */}
        <FadeIn
          delay={0.2}
          className="relative bg-white rounded-2xl p-8 xl:p-12 mb-8 border border-gray-100"
        >
          <div className="absolute top-6 left-8 xl:left-12">
            <PiQuotesFill className="text-4xl text-indigo-200" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 pt-6">
            <div className="flex-1">
              <p className="text-lg xl:text-xl text-foreground leading-relaxed mb-6 italic">
                &quot;{testimonials[0].quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-sm">
                    {testimonials[0].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-sm">
                    {testimonials[0].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[0].role}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={testimonials[0].image}
                alt="Waitlist Member"
                width={200}
                height={200}
                className="w-40 xl:w-52"
              />
            </div>
          </div>
        </FadeIn>

        {/* Stats + Second Testimonial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 xl:gap-6">
          {/* Community Stats */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {communityStats.map((stat, index) => (
              <FadeIn
                key={index}
                delay={0.3 + index * 0.1}
                className="bg-white rounded-xl p-6 text-center border border-gray-100"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl xl:text-4xl font-medium mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Second Testimonial */}
          <FadeIn
            delay={0.4}
            className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <PiQuotesFill className="text-2xl text-blue-200 mb-3" />
              <p className="text-sm text-foreground leading-relaxed italic mb-4">
                &quot;{testimonials[1].quote}&quot;
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">
                  {testimonials[1].name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-sm">
                  {testimonials[1].name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonials[1].role}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default SocialProof;
