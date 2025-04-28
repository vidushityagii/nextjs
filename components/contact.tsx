"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
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
            Get In <span className="text-[#00e5ff]">Touch</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-[#00e5ff] mx-auto mt-2"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-300">
              Feel free to reach out to me for any inquiries about video editing, motion graphics services.
            </p>

            <div className="space-y-6">
              <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-4">
                <div className="bg-[#00e5ff]/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#00e5ff]" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-300">vidushityagii1845@gmail.com</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-4">
                <div className="bg-[#00e5ff]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#00e5ff]" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-300">+91 9758633443</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-4">
                <div className="bg-[#00e5ff]/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[#00e5ff]" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-300">Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
