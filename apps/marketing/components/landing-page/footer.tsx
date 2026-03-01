import Image from "next/image";
import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiTwitterLogoFill,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-6 px-8 pb-10 pt-16">
      {/* Logo */}
      <Image
        src="/bird-logo.png"
        width={1025}
        height={500}
        alt="logo"
        className="w-24"
      />

      {/* Social Icons */}
      <div className="flex gap-4">
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
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Confam. Coming soon.
      </p>
    </footer>
  );
};

export default Footer;
