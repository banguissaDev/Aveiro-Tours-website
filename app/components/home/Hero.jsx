"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const colors = {
    forestGreen: "#1B4332",
    warmGold: "#D4A373",
  };

  const images = [
    "/img (1).jpg",
    "/img (13).jpg",
    "/img (19).jpg",
    "/img (7).jpg",
    "/img (9).jpg",
    "/img (23).jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden font-[family-name:var(--font-montserrat)]">
      
      {/* --- BACKGROUND SLIDER --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt="Averio Tours Rwanda Safari"
              fill
              priority
              quality={75} 
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- CONTENT LAYER --- */}
      {/* Added pb-20 to desktop to prevent button/indicator overlap */}
      <motion.div 
        className="relative z-20 text-center px-6 max-w-5xl md:pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          variants={itemVariants}
          className="block text-xs md:text-sm font-bold uppercase tracking-[0.5em] mb-4 md:mb-6"
          style={{ color: colors.warmGold }}
        >
          Discover Rwanda with Experts
        </motion.span>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl  md:text-8xl font-extrabold text-white mb-6 md:mb-8 leading-[1.1] uppercase tracking-tighter"
        >
          Beyond Safaris, <br />
          <span className="italic font-light opacity-90" style={{ color: colors.warmGold }}>
            Into Experiences
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-gray-100 mb-8 md:mb-12 max-w-2xl mx-auto font-[family-name:var(--font-open-sans)] leading-relaxed"
        >
          Experience the natural beauty and rich heritage of Rwanda through 
          customized itineraries and authentic safari adventures.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
        >
          <Link 
            href="/tours" 
            className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold text-xs md:text-sm uppercase tracking-widest transition-all hover:scale-105 hover:brightness-110 shadow-2xl"
            style={{ backgroundColor: colors.forestGreen }}
          >
            Explore Tours
          </Link>
          
          <Link 
            href="/contact" 
            className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold text-xs md:text-sm uppercase tracking-widest border border-white/40 backdrop-blur-md hover:bg-white hover:text-black transition-all shadow-lg"
          >
            Plan Your Trip
          </Link>
        </motion.div>
      </motion.div>

      {/* --- FIXED SLIDER INDICATORS --- */}
      {/* Changed bottom-10 to bottom-8 and ensured high z-index */}
      <div className="absolute bottom-8 z-40 flex gap-3">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-12 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;