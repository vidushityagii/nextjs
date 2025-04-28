"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Showreel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // once: false to trigger on every in/out view
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Auto play/pause on scroll into view
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // default start muted
      if (isInView) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isInView]);

  return (
    <section id="showreel" className="py-20 bg-[#0c101a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121620] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#121620] to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#00e5ff]">Showreel</span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-[#00e5ff] mx-auto mt-2"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Showcasing My Craft: A Journey Through Video Editing and Creative Visuals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-[#00e5ff]/10"
        >
          <div className="aspect-video bg-black relative group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/placeholder.svg?height=720&width=1280"
              muted
              loop
            >
              <source src="vidushii.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video overlay play button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex items-center justify-center group-hover:opacity-100 opacity-100 transition-opacity">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00e5ff] rounded-full p-4 cursor-pointer shadow-lg shadow-[#00e5ff]/20"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-8 w-8 text-black" /> : <Play className="h-8 w-8 text-black" />}
              </motion.div>
            </div>

            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#00e5ff] hover:bg-white/10"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#00e5ff] hover:bg-white/10"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>

                <div className="text-sm text-white/80">00:00 / 03:45</div>
              </div>

              <div className="text-sm text-white/80">HD 1080p</div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div className="h-full bg-[#00e5ff] w-[15%]" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        />
      </div>
    </section>
  );
}
