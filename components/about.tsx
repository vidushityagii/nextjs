"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Film, Camera, Edit, Award } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-20 bg-[#0c101a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121620] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#121620] to-transparent"></div>

      <motion.div
        className="absolute -right-40 top-40 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative flex justify-center order-2 md:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated profile image with glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#00a0b3] opacity-20 blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>

              <div className="absolute inset-0 rounded-full border-2 border-[#00e5ff]"></div>

              <div className="absolute inset-2 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/20 to-transparent mix-blend-overlay z-10"></div>
                <Image
                  src="/about.jpeg"
                  alt="Muhammad Arief"
                  width={320}
                  height={320}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -left-4 bg-[#121620] border border-[#00e5ff]/30 p-2 rounded-full shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <Film className="h-6 w-6 text-[#00e5ff]" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-[#121620] border border-[#00e5ff]/30 p-2 rounded-full shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <Camera className="h-6 w-6 text-[#00e5ff]" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-1/3 bg-[#121620] border border-[#00e5ff]/30 p-2 rounded-full shadow-lg"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <Edit className="h-6 w-6 text-[#00e5ff]" />
              </motion.div>

              <motion.div
                className="absolute top-10 -left-10 bg-[#121620] border border-[#00e5ff]/30 p-2 rounded-full shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                <Award className="h-6 w-6 text-[#00e5ff]" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 order-1 md:order-2">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-[#00e5ff]">Me</span>
              </h2>
              <motion.div
                className="h-1 w-1/3 bg-[#00e5ff] mt-2"
                initial={{ width: 0 }}
                animate={isInView ? { width: "33%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.div>
            </div>

            <motion.p variants={itemVariants} className="text-gray-300">
              I'm a video editor based in Ghaziabad, passionate about transforming raw footage into captivating visual stories. My work is driven by creativity, attention to detail, and a deep appreciation for storytelling through visuals.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300">
              I offer end-to-end video editing services across diverse formats, including social media content, promotional materials, and cinematic projects. My expertise spans precise editing, color correction, audio enhancement, and motion graphics—using industry-standard tools like Adobe Premiere Pro, After Effects, and DaVinci Resolve. Each project is crafted to align with the client’s brand identity, platform requirements, and target audience.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300">
              I take a collaborative approach, aligning each project with the client’s vision and goals. Every edit is crafted to deliver clear, engaging, and impactful visual storytelling.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "40+", label: "Projects Completed" },
                { number: "10+", label: "Happy Clients" },
                //{ number: "10+", label: "Awards Won" },
              ].map((stat, index) => (
                <div key={index} className="bg-[#121620]/50 border border-[#00e5ff]/10 rounded-lg p-4 text-center">
                  <h3 className="text-3xl font-bold text-[#00e5ff]">{stat.number}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
