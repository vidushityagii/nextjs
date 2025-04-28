"use client";

import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Social Media Content Creation",
      category: "Storytelling",
      image: "/socail.webp?height=400&width=600",
      link: "https://drive.google.com/drive/folders/15q7MEb_LqpZFPBFzw9K0Oz0lLMMCBWR4?usp=sharing",
    },
    {
      title: "YouTube Video Editing",
      category: "Video Production",
      image: "/yt.jpeg?height=400&width=600",
      link: "https://drive.google.com/drive/folders/10r3zgvNH48bZ2viuoVSq0IsJ9jzsW6A4?usp=drive_link",
    },
    {
      title: "Motion Graphics",
      category: "Digital Animation",
      image: "/motion.jpg?height=400&width=600",
      link: "https://drive.google.com/drive/folders/1evX0yWQPgdhejBClOb7A3DWyYxfz-mHV?usp=drive_link",
    },
    {
      title: "Marketing Videos",
      category: "Branding & Promotion",
      image: "/marketing.jpg?height=400&width=600",
      link: "https://drive.google.com/drive/folders/12e2yCypT50VA7M-DvbSBTNd6Z6YaLQRO?usp=drive_link",
    },
    {
      title: "Event Video Editing",
      category: "Event Production",
      image: "/event.jpeg?height=400&width=600",
      link: "https://drive.google.com/drive/folders/18d5bkuCrAngAIXNE6bW-GogwmydCHlWv?usp=drive_link",
    },
    {
      title: "Corporate Video Production",
      category: "Business Content",
      image: "/corporate-governance.jpg?height=400&width=600",
      link: "https://drive.google.com/drive/folders/1Ra46hP4WqiJB-F8FRVlfdxY6smI4R068?usp=drive_link",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background blob */}
      <motion.div
        className="absolute -right-40 top-40 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest <span className="text-[#00e5ff]">Projects</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-[#00e5ff] mx-auto mt-2"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Showcasing my recent work in video editing, motion graphics, and cinematography
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg border border-[#00e5ff]/10 hover:border-[#00e5ff]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)]"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#00e5ff] text-sm">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#00e5ff] text-[#00e5ff] hover:bg-[#00e5ff] hover:text-black w-fit"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
