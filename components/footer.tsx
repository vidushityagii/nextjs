"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#0a0e14] text-gray-300 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121620] to-transparent"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-[#00e5ff] mr-2">VIDUSHI</span>
              <span className="relative">
                <span className="absolute -inset-1 rounded-lg bg-[#00e5ff] blur-sm opacity-50"></span>
                <span className="relative text-black bg-[#00e5ff] px-2 py-1 rounded-lg">TYAGI</span>
              </span>
            </h3>
            <p className="mb-4">
              Professional video editor specializing in motion graphics, editing, and post-production.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/vidushi_tyagii/"
                className="text-gray-400 hover:text-[#00e5ff] transition-colors duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/vidushityagi/"
                className="text-gray-400 hover:text-[#00e5ff] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About","Showreel","Projects", "Services", "Experience", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00e5ff] transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">•</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#00e5ff]" />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-[#00e5ff]" />
                <span>vidushityagii1845@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-[#00e5ff]" />
                <span>+91 9758633443</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Video Editor Portfolio. All rights reserved.</p>

          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-[#00e5ff]/10 hover:bg-[#00e5ff]/20 text-[#00e5ff] p-3 rounded-full transition-colors duration-300"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
