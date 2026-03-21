import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiTwitterLogoFill,
} from "react-icons/pi";
import { LogoIcon } from "../global/icons";
import { FadeIn } from "../global/fade-in";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-6 px-8 pb-10 pt-16">
      <FadeIn delay={0.1}>
        <LogoIcon className="w-12" />
      </FadeIn>

      {/* Social Icons */}
      <FadeIn delay={0.2} className="flex gap-4">
        <a
          href="#"
          className="text-gray-400 transition-colors hover:text-gray-600"
        >
          <PiInstagramLogoFill className="text-2xl" />
        </a>
        <a
          href="#"
          className="text-gray-400 transition-colors hover:text-gray-600"
        >
          <PiTwitterLogoFill className="text-2xl" />
        </a>
        <a
          href="#"
          className="text-gray-400 transition-colors hover:text-gray-600"
        >
          <PiFacebookLogoFill className="text-2xl" />
        </a>
      </FadeIn>

      {/* Copyright */}
      <FadeIn delay={0.3}>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Confam. Coming soon.
        </p>
      </FadeIn>
    </footer>
  );
};

export default Footer;
