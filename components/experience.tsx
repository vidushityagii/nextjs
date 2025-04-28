"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Circle, Calendar, Building, Briefcase } from "lucide-react"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
       period: "Feb 2024 - July 2024",
  company: "Digidir Academy",
  position: "Video Editor Intern",
      responsibilities: [
        "Edit high-quality videos",
    "Collaborate on promotions",
    "Create voiceover content",
      ],
    },
    {
      "period": "May 2023 - Present",
    "company": "KIET Group of Institutions",
    "position": "Creative Cell",
    "location": "Ghaziabad, Uttar Pradesh",
    "responsibilities": [
      "Trained 23 team members",
      "Developed promotional strategies",
      "Fostered team collaboration"],
    },
    {
     "period": "Feb 2022 - Present",
    "company": "Self-Employed",
    "position": "Freelance Video Editor",
    "location": "Ghaziabad, Uttar Pradesh, India",
    "responsibilities": [
      "Created promotional content",
      "Worked closely with clients",
      "Managed full production"],
    },
   
  ]

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

  return (
    <section id="experience" className="py-20 bg-[#0c101a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121620] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#121620] to-transparent"></div>

      {/* Animated film strip decoration */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 0.05, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-1/4 w-[100px] h-[600px] border-[8px] border-white rounded-md flex flex-col"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-14 border-b-[8px] border-white"></div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 0.05, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/3 w-[100px] h-[600px] border-[8px] border-white rounded-md flex flex-col"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="h-14 border-b-[8px] border-white"></div>
        ))}
      </motion.div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-[#00e5ff]">Experience</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-[#00e5ff] mx-auto mt-2"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey in the world of video editing and multimedia
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00e5ff] via-[#00e5ff]/70 to-[#00e5ff]/30 transform md:translate-x-px"
          ></motion.div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative mb-12"
            >
              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-[#121620] border-2 border-[#00e5ff] transform -translate-x-1/2 flex items-center justify-center z-10"
                >
                  <Circle className="h-2 w-2 text-[#00e5ff]" />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-10 md:pl-0`}
                >
                  <div className="bg-[#1a202c]/50 border border-[#00e5ff]/10 rounded-lg p-6 hover:border-[#00e5ff]/30 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,229,255,0.15)]">
                    <div className="flex items-center mb-3 gap-2 text-[#00e5ff]/80">
                      <Calendar className="h-4 w-4" />
                      <div className="inline-block bg-[#00e5ff]/10 text-[#00e5ff] px-3 py-1 rounded-full text-sm">
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center mb-2 gap-2">
                      <Building className="h-4 w-4 text-[#00e5ff]/80" />
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                    </div>

                    <div className="flex items-center mb-3 gap-2">
                      <Briefcase className="h-4 w-4 text-[#00e5ff]/80" />
                      <h4 className="text-[#00e5ff]">{exp.position}</h4>
                    </div>

                    <ul className="text-gray-400 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[#00e5ff]">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
