'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/hero1.png',
    title: 'Welcome to BoltCare',
    subtitle: 'Your trusted partner in safety and service',
  },
  {
    id: 2,
    image: '/hero2.png',
    title: 'Innovating the Future',
    subtitle: 'Reliable solutions for a smarter world',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 👉 Mobile-only Static Image */}
      <div className="sm:hidden relative h-[300px] mt-4 w-full">
        <Image
          src="/hero1.png"
          alt="Hero Mobile"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* 👉 Desktop/Tablet Slider */}
      <div className="hidden sm:block relative h-[70vh] md:h-[80vh] w-full overflow-hidden mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].image}
              alt="Slide"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
