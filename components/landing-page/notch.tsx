"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PiListBold, PiXBold } from "react-icons/pi";

import { Button } from "@/components/ui/button";

// Constants
const MARGIN = 6;
const NOTCH_HEIGHT_COLLAPSED = 52;
const NOTCH_HEIGHT_EXPANDED = 200;
const CURVE_RADIUS = 20;
const BORDER_RADIUS = 24;
const SCROLL_THRESHOLD = 50;
const MD_BREAKPOINT = 768;

// Nav links
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#social-proof" },
];

// Responsive notch widths
const getNotchWidth = (
  screenWidth: number,
  isScrolled: boolean,
  isMobile: boolean,
  isMenuOpen: boolean,
) => {
  if (isMobile) {
    return Math.min(screenWidth * 0.85, 400);
  }
  const baseWidth = Math.min(Math.max(screenWidth * 0.5, 300), 800);
  return isScrolled ? baseWidth * 0.75 : baseWidth;
};

export const Notch = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth - MARGIN * 2,
        height: window.innerHeight - MARGIN * 2,
      });
      setIsMobile(window.innerWidth < MD_BREAKPOINT);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    updateDimensions();
    handleScroll();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (isScrolled && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isScrolled, isMenuOpen]);

  const { width: w, height: h } = dimensions;
  const currentNotchHeight =
    isMobile && isMenuOpen ? NOTCH_HEIGHT_EXPANDED : NOTCH_HEIGHT_COLLAPSED;
  const currentNotchWidth = getNotchWidth(w, isScrolled, isMobile, isMenuOpen);
  const notchLeft = (w - currentNotchWidth) / 2;
  const notchRight = notchLeft + currentNotchWidth;

  // Border stroke path
  const borderPath =
    w === 0
      ? ""
      : `
    M ${notchLeft} 0
    L ${BORDER_RADIUS} 0
    Q 0 0 0 ${BORDER_RADIUS}
    L 0 ${h - BORDER_RADIUS}
    Q 0 ${h} ${BORDER_RADIUS} ${h}
    L ${w - BORDER_RADIUS} ${h}
    Q ${w} ${h} ${w} ${h - BORDER_RADIUS}
    L ${w} ${BORDER_RADIUS}
    Q ${w} 0 ${w - BORDER_RADIUS} 0
    L ${notchRight} 0
    L ${notchRight} ${currentNotchHeight - CURVE_RADIUS}
    Q ${notchRight} ${currentNotchHeight} ${notchRight - CURVE_RADIUS} ${currentNotchHeight}
    L ${notchLeft + CURVE_RADIUS} ${currentNotchHeight}
    Q ${notchLeft} ${currentNotchHeight} ${notchLeft} ${currentNotchHeight - CURVE_RADIUS}
    Z
  `;

  // Frame fill path (masks scrolling content)
  const frameFillPath =
    w === 0
      ? ""
      : `
    M -${MARGIN} -${MARGIN} L ${w + MARGIN} -${MARGIN} L ${w + MARGIN} ${
      h + MARGIN
    } L -${MARGIN} ${h + MARGIN} Z
    M ${notchLeft} 0
    L ${notchLeft} ${currentNotchHeight - CURVE_RADIUS}
    Q ${notchLeft} ${currentNotchHeight} ${notchLeft + CURVE_RADIUS} ${currentNotchHeight}
    L ${notchRight - CURVE_RADIUS} ${currentNotchHeight}
    Q ${notchRight} ${currentNotchHeight} ${notchRight} ${currentNotchHeight - CURVE_RADIUS}
    L ${notchRight} 0
    L ${w - BORDER_RADIUS} 0
    Q ${w} 0 ${w} ${BORDER_RADIUS}
    L ${w} ${h - BORDER_RADIUS}
    Q ${w} ${h} ${w - BORDER_RADIUS} ${h}
    L ${BORDER_RADIUS} ${h}
    Q 0 ${h} 0 ${h - BORDER_RADIUS}
    L 0 ${BORDER_RADIUS}
    Q 0 0 ${BORDER_RADIUS} 0
    Z
  `;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Border frame with mask */}
      <div className="pointer-events-none fixed inset-0 z-10 m-1.5">
        {w > 0 && (
          <svg
            className="absolute inset-0 size-full overflow-visible"
            viewBox={`0 0 ${w} ${h}`}
            preserveAspectRatio="none"
          >
            <path
              d={frameFillPath}
              fillRule="evenodd"
              className="fill-background transition-all duration-300"
            />
            <path
              d={borderPath}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-zinc-300 dark:text-white/10 transition-all duration-300"
            />
          </svg>
        )}
      </div>

      {/* Navbar */}
      <nav
        ref={navRef}
        className="fixed left-1/2 z-50 -translate-x-1/2 rounded-b-[20px] bg-background overflow-hidden transition-all duration-300"
        style={{
          top: MARGIN + 1,
          width: Math.max(currentNotchWidth - 7, 260),
          height: currentNotchHeight - 2,
          opacity: w > 0 ? 1 : 0,
        }}
      >
        {/* Top bar — always visible */}
        <div
          className="flex items-center justify-between px-3 sm:px-4"
          style={{ height: NOTCH_HEIGHT_COLLAPSED - 2 }}
        >
          <Link
            href="/"
            aria-label="home"
            className="text-base font-bold tracking-tight text-zinc-900 sm:text-lg dark:text-white"
          >
            Confam
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-4 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-sm font-medium"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center rounded-md p-1.5 text-zinc-700 transition-colors hover:bg-zinc-100 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <PiXBold className="text-base" />
              ) : (
                <PiListBold className="text-base" />
              )}
            </button>

            {/* CTA button */}
            <Button className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base">
              <Link href="#get-started" className="flex items-center gap-1.5">
                <span className="hidden sm:inline">Join Waitlist</span>
                <span className="sm:hidden">Join</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile expanded menu */}
        {isMobile && (
          <div
            className="flex flex-col gap-1 px-4 pt-1 pb-4 transition-opacity duration-200"
            style={{ opacity: isMenuOpen ? 1 : 0 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};
