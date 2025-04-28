"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Scissors, Tv, Music, Video, ArrowRight } from "lucide-react"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Scissors className="h-10 w-10 text-[#00e5ff]" />,
      title: "Video Editing & Post-Production",
      description:
        "Transform raw footage into polished videos by cutting, sequencing, color correcting, and adding effects.",
    },
    {
      icon: <Tv className="h-10 w-10 text-[#00e5ff]" />,
      title: "Motion Graphics and Animation",
      description:
        "Create dynamic visuals and animations to add an extra layer of engagement and professionalism to video content.",
    },
    {
      icon: <Music className="h-10 w-10 text-[#00e5ff]" />,
      title: "Sound Design and Audio Editing",
      description:
        "Enhance video projects with high-quality audio, including background music, sound effects, and voiceovers.",
    },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      ></motion.div>

      <motion.div
        className="absolute -right-20 bottom-20 w-60 h-60 rounded-full bg-[#00e5ff]/5 blur-3xl"
        animate={{
          x: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#00e5ff]">Services</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-[#00e5ff] mx-auto mt-2"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Professional video editing and production services to bring your vision to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 229, 255, 0.15)" }}
              className="bg-[#1a202c]/50 border border-[#00e5ff]/10 rounded-lg p-6 hover:border-[#00e5ff]/30 transition-all duration-300 group"
            >
              <motion.div
                className="mb-4 relative"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -inset-2 rounded-full bg-[#00e5ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00e5ff] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
