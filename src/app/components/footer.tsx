import Image from "next/image";
import logo from '../assets/logo-D9NHcesw 1.png'
import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#031527] text-white py-6 px-4 md:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo & Social Links */}
        <div className="flex items-center justify-between pb-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              {/* Replace with your actual logo image path */}
              <Image
                src={logo}
                alt="HERO.IO Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-base tracking-wider">HERO.IO</span>
          </Link>

          {/* Social Links */}
          <div className="flex flex-col items-end gap-2">
            <span className="text-xs font-medium text-gray-300">Social Links</span>
            <div className="flex items-center gap-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-full bg-white text-[#031527] flex items-center justify-center text-xs hover:bg-gray-200 transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={11} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-full bg-white text-[#031527] flex items-center justify-center text-xs hover:bg-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={11} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-full bg-white text-[#031527] flex items-center justify-center text-xs hover:bg-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700/60 w-full my-3" />

        {/* Bottom Section: Copyright */}
        <div className="text-center pt-2">
          <p className="text-[11px] text-gray-400">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;