"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { name: "Premiere Pro", percentage: 90, color: "#00e5ff", icon: "/placeholder.svg?height=40&width=40" },
    { name: "After Effects", percentage: 70, color: "#00e5ff", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Adobe Express", percentage: 75, color: "#00e5ff", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Final Cut Pro", percentage: 60, color: "#00e5ff", icon: "/placeholder.svg?height=40&width=40" },
    { name: "DaVinci Resolve", percentage: 65, color: "#00e5ff", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Canva", percentage: 80, color: "#00e5ff", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Capcut", percentage: 80, color: "#00e5ff", icon: "/placeholder.svg?height=40&width=40" },
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
    <section id="skills" className="py-20 bg-[#0c101a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121620] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#121620] to-transparent"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute -left-40 bottom-40 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#00e5ff]">Skills</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-[#00e5ff] mx-auto mt-2"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Because I never stop looking for new styles and forms to express myself to improve my skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="space-y-2 bg-[#1a202c]/30 p-4 rounded-lg border border-[#00e5ff]/10 hover:border-[#00e5ff]/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#00e5ff]/10 p-2 rounded-md">
                      <div className="w-6 h-6 bg-[#00e5ff] mask mask-squircle"></div>
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-[#00e5ff] font-semibold">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#00e5ff] to-[#00a0b3] rounded-full relative"
                  >
                    <motion.div
                      className="absolute right-0 top-0 h-full w-2 bg-white/30 rounded-full"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    ></motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
