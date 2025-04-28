"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

export function VideoElements() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [0, 0.7, 0],
      transition: {
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    })
  }, [controls])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Film strip decorations */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.03, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute -left-20 top-1/4 w-[150px] h-[800px] border-[10px] border-white rounded-md flex flex-col"
      >
        {[...Array(15)].map((_, i) => (
          <div key={i} className="h-12 border-b-[10px] border-white"></div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.03, x: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute -right-20 top-1/3 w-[150px] h-[800px] border-[10px] border-white rounded-md flex flex-col"
      >
        {[...Array(15)].map((_, i) => (
          <div key={i} className="h-12 border-b-[10px] border-white"></div>
        ))}
      </motion.div>

      {/* Video timeline elements */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl h-20 bg-[#1a1a1a] rounded-lg flex items-center px-4"
      >
        <div className="w-full h-8 bg-[#333] rounded-md flex">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-[#555] relative">
              {i % 5 === 0 && <div className="absolute -top-3 w-0.5 h-2 bg-[#00e5ff] left-0"></div>}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Video editing elements */}
      <motion.div
        animate={controls}
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full border-2 border-[#00e5ff]/30 flex items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full border-2 border-[#00e5ff]/50"></div>
      </motion.div>

      <motion.div
        animate={controls}
        className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full border-2 border-[#00e5ff]/20 flex items-center justify-center"
      >
        <div className="w-40 h-40 rounded-full border-2 border-[#00e5ff]/30"></div>
      </motion.div>

      {/* Waveform visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-5xl h-20 flex items-center justify-center space-x-1"
      >
        {[...Array(100)].map((_, i) => {
          const height = Math.sin(i * 0.2) * 50 + 60
          return (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                duration: 0.5,
                delay: i * 0.01,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="w-1 bg-[#00e5ff]/20 rounded-full"
            ></motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
