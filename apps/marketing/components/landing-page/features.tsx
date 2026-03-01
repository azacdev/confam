"use client";

import Image from "next/image";
import { useState } from "react";
import {
  PiArrowRight,
  PiShieldCheckLight,
  PiChartLineUpLight,
  PiBuildingsLight,
  PiRocketLaunchLight,
  PiEyeSlashLight,
  PiUsersThreeLight,
  PiTrendUpLight,
} from "react-icons/pi";

import Container from "../global/container";

// Value proposition stats
const stats = [
  {
    value: "100%",
    label: "Anonymous",
    description: "Your identity stays protected",
  },
  {
    value: "Real",
    label: "Salary Data",
    description: "Verified professional insights",
  },
  {
    value: "Honest",
    label: "Reviews",
    description: "Unfiltered company feedback",
  },
];

// How it works steps
const steps = [
  {
    number: "01",
    title: "Join the Waitlist",
    description: "Sign up with just your email to secure early access.",
  },
  {
    number: "02",
    title: "Create Your Profile",
    description: "Set up anonymously - no personal info required.",
  },
  {
    number: "03",
    title: "Share & Discover",
    description: "Contribute and access real insights from the community.",
  },
];

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section className="py-10 lg:py-20" id="features">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl xl:text-5xl font-medium mb-4">
            Why Join Confam?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get access to the insights you need to make informed career
            decisions — all while staying completely anonymous.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#f6f5f4] rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl xl:text-5xl font-medium text-emerald-600 mb-1">
                {stat.value}
              </div>
              <div className="text-lg font-medium">{stat.label}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-12 gap-4 xl:gap-6">
          {/* Large Feature Card - Anonymous */}
          <div
            className="col-span-12 lg:col-span-8 bg-[#f6f5f4] rounded-xl p-6 xl:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow cursor-pointer"
            onMouseEnter={() => setHoveredFeature("anonymous")}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <PiEyeSlashLight className="text-2xl text-emerald-600" />
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                  Core Feature
                </span>
              </div>
              <h3 className="text-2xl xl:text-3xl font-medium mb-3">
                Complete Anonymity
              </h3>
              <p className="text-muted-foreground mb-4">
                Share your experiences without fear. Your identity is always
                protected, so you can speak freely about salaries, workplace
                culture, and career challenges.
              </p>
              <div className="text-emerald-600 flex items-center hover:underline cursor-pointer text-sm font-medium">
                Learn more <PiArrowRight className="ml-2" />
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/assets/MeditatingDoodle.svg"
                alt="Anonymous sharing"
                width={300}
                height={300}
                className="w-48 xl:w-64"
              />
            </div>
          </div>

          {/* Side Stats Card */}
          <div className="col-span-12 lg:col-span-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 xl:p-8 text-white flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <PiShieldCheckLight className="text-4xl" />
              <span className="text-lg font-medium">Privacy First</span>
            </div>
            <p className="text-emerald-100 text-sm mb-6">
              Your data is encrypted and your identity is never shared. We
              believe in complete transparency about compensation, not about who
              you are.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div>
                <div className="text-2xl font-bold">0</div>
                <div className="text-emerald-200">Personal data stored</div>
              </div>
              <div className="w-px h-10 bg-emerald-400"></div>
              <div>
                <div className="text-2xl font-bold">256</div>
                <div className="text-emerald-200">Bit encryption</div>
              </div>
            </div>
          </div>

          {/* Salary Insights Card */}
          <div
            className="col-span-12 md:col-span-6 bg-[#f6f5f4] rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
            onMouseEnter={() => setHoveredFeature("salaries")}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <PiChartLineUpLight className="text-2xl text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Transparent Salaries</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Access real salary data from professionals across Africa. Know
              your worth before you negotiate.
            </p>
            <div className="flex justify-center py-4">
              <Image
                src="/assets/PlantDoodle.svg"
                alt="Salary insights"
                width={200}
                height={200}
                className="w-32 xl:w-40"
              />
            </div>
            <div className="text-blue-600 flex items-center hover:underline cursor-pointer text-sm font-medium">
              View salary ranges <PiArrowRight className="ml-2" />
            </div>
          </div>

          {/* Company Reviews Card */}
          <div
            className="col-span-12 md:col-span-6 bg-[#f6f5f4] rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
            onMouseEnter={() => setHoveredFeature("reviews")}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <PiBuildingsLight className="text-2xl text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Company Insights</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get honest reviews about company culture, management, and growth
              opportunities before you apply.
            </p>
            <div className="flex justify-center py-4">
              <Image
                src="/assets/SitReadingDoodle.svg"
                alt="Company reviews"
                width={200}
                height={200}
                className="w-32 xl:w-40"
              />
            </div>
            <div className="text-purple-600 flex items-center hover:underline cursor-pointer text-sm font-medium">
              Browse companies <PiArrowRight className="ml-2" />
            </div>
          </div>

          {/* Career Growth Card */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#f6f5f4] rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <PiRocketLaunchLight className="text-2xl text-orange-600" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Career Growth</h3>
            <p className="text-muted-foreground text-sm">
              Learn from those who&apos;ve walked the path. Get advice on
              interviews, promotions, and transitions.
            </p>
            <div className="text-orange-600 flex items-center hover:underline cursor-pointer text-sm font-medium mt-4">
              Get advice <PiArrowRight className="ml-2" />
            </div>
          </div>

          {/* Community Card */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#f6f5f4] rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-pink-100 rounded-lg">
                <PiUsersThreeLight className="text-2xl text-pink-600" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Community Driven</h3>
            <p className="text-muted-foreground text-sm">
              Join a growing network of professionals helping each other succeed
              across the continent.
            </p>
            <div className="text-pink-600 flex items-center hover:underline cursor-pointer text-sm font-medium mt-4">
              Join community <PiArrowRight className="ml-2" />
            </div>
          </div>

          {/* Market Trends Card */}
          <div className="col-span-12 lg:col-span-4 bg-[#f6f5f4] rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-cyan-100 rounded-lg">
                <PiTrendUpLight className="text-2xl text-cyan-600" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Market Trends</h3>
            <p className="text-muted-foreground text-sm">
              Stay ahead with insights on hiring trends, in-demand skills, and
              industry movements.
            </p>
            <div className="text-cyan-600 flex items-center hover:underline cursor-pointer text-sm font-medium mt-4">
              View trends <PiArrowRight className="ml-2" />
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-20 xl:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-4xl font-medium mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Getting started is simple and takes less than a minute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                    <PiArrowRight className="text-2xl text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
