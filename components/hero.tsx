"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#00e5ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-3xl"></div>

        {/* Film strip decoration */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute -left-20 top-1/3 w-[200px] h-[800px] border-[12px] border-white rounded-md flex flex-col"
        >
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-16 border-b-[12px] border-white"></div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute -right-20 top-1/4 w-[200px] h-[800px] border-[12px] border-white rounded-md flex flex-col"
        >
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-16 border-b-[12px] border-white"></div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="inline-block px-3 py-1 bg-[#00e5ff]/10 text-[#00e5ff] rounded-full text-sm font-medium mb-4">
                Professional Video Editor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Vidushi</span>
              <span className="text-[#00e5ff]"> Tyagi</span>
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-2xl md:text-3xl text-[#00e5ff] font-light"
            >
              Video Editor & Post-Production Enthusiast
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-gray-300 max-w-lg"
            >
              I bring stories to life through dynamic visuals and impactful editing. Let's create something unforgettable that captivates your audience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              {/* Download CV */}
              <a
                href="https://drive.google.com/drive/folders/1z4EvehyzGW0KC4TReLFnIIqzkIelenBs?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#00e5ff] hover:bg-[#00e5ff]/80 text-black rounded-full px-6">
                  Download CV <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              {/* Watch Showreel - scroll to #showreel */}
              <a href="#showreel">
                <Button
                  variant="outline"
                  className="border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff]/10 rounded-full px-6"
                >
                  <Play className="mr-2 h-4 w-4" /> Watch Showreel
                </Button>
              </a>

              {/* Social links */}
              <div className="flex space-x-4 items-center mt-2">
                <Link href="https://www.instagram.com/vidushi_tyagii/" className="text-gray-400 hover:text-[#00e5ff] transition-colors duration-300">
                  <Instagram size={20} />
                </Link>
                <Link href="https://www.linkedin.com/in/vidushityagi/" className="text-gray-400 hover:text-[#00e5ff] transition-colors duration-300">
                  <Linkedin size={20} />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 + i * 0.2 }}
                  className={`absolute -inset-${(i + 1) * 4} rounded-full border-2 border-[#00e5ff]/${(3 - i) * 10}`}
                />
              ))}

              {/* Pulsing glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(0, 229, 255, 0)",
                    "0 0 20px rgba(0, 229, 255, 0.5)",
                    "0 0 0 rgba(0, 229, 255, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 rounded-full"
              />

              {/* Profile image */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00e5ff] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/20 to-transparent mix-blend-overlay" />
                <Image
                  src="/hero (2).png"
                  alt="Vidushi Tyagi"
                  width={320}
                  height={320}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="absolute -bottom-4 -right-4 bg-[#00e5ff] text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-[#00e5ff]/20"
              >
                Available for hire
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
