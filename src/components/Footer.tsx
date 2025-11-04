import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import templateOneData from "../../templateOneData.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = templateOneData.About.links;

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return FaGithub;
      case "linkedin":
        return FaLinkedin;
      case "x":
        return FaXTwitter;
      case "codeforces":
        return SiCodeforces;
      case "leetcode":
        return SiLeetcode;
      default:
        return FaGithub;
    }
  };

  return (
    <footer className="relative mt-20 md:mt-32 lg:mt-40 border-t border-white/10">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 via-purple-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Copyright and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-white/80 text-sm md:text-base mb-2">
              © {currentYear} Gerges Remon. All rights reserved.
            </p>
            <p className="text-white/60 text-xs md:text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks
              .filter(({ preview }) => preview)
              .map(({ id, link }, index) => {
                const IconComponent = getIcon(id);
                return (
                  <motion.a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <IconComponent
                      fontSize={24}
                      className="text-white/80 group-hover:text-white transition-colors duration-300"
                    />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.a>
                );
              })}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <a
              href="#about"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span className="text-white/80 group-hover:text-white text-sm font-medium transition-colors duration-300">
                Back to Top
              </span>
              <svg
                className="w-4 h-4 text-white/80 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center">
            <p className="text-white/60 text-xs md:text-sm">
              Designed & Developed with ❤️
            </p>
            <span className="hidden md:block text-white/20">•</span>
            <p className="text-white/60 text-xs md:text-sm">
              Powered by Vite & React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

