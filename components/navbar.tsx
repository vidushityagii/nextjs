"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    "home",
    "about",
    "showreel",
    "projects",
    "services",
    "experience",
    "skills",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const currentPosition = window.scrollY + 300;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121620]/90 backdrop-blur-md border-b border-[#00e5ff]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div variants={itemVariants} className="relative">
          <Link href="/" className="text-[#00e5ff] text-2xl font-bold flex items-center">
            <span className="mr-2">VIDUSHI</span>
            <span className="relative">
              <span className="absolute -inset-1 rounded-lg bg-[#00e5ff] blur-sm opacity-50"></span>
              <span className="relative text-black bg-[#00e5ff] px-2 py-1 rounded-lg">TYAGI</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {sections.map((section) => (
            <motion.div key={section} variants={itemVariants}>
              <Link
                href={`#${section}`}
                className={`px-3 py-2 rounded-md transition-all duration-300 ${
                  activeSection === section
                    ? "text-[#00e5ff] bg-[#00e5ff]/10 font-medium"
                    : "text-gray-300 hover:text-[#00e5ff] hover:bg-[#00e5ff]/5"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="h-0.5 bg-[#00e5ff] mt-1"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          variants={itemVariants}
          className="md:hidden text-gray-300 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-3/4 bg-[#0a0e14] border-l border-[#00e5ff]/10 md:hidden flex flex-col p-4 pt-20"
          >
            <div className="flex flex-col space-y-2">
              {sections.map((section, index) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`#${section}`}
                    className={`block px-4 py-3 rounded-md ${
                      activeSection === section
                        ? "text-[#00e5ff] bg-[#00e5ff]/10 font-medium"
                        : "text-gray-300 hover:text-[#00e5ff]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
