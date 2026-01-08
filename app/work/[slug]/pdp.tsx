'use client';

import { motion } from 'framer-motion';
import { notFound, redirect } from 'next/navigation';
import { useState, useRef } from 'react';
import { getWorkById } from '@/lib/works';
import { Header } from '@/components/header';
import { ProductImage } from '@/components/product-image';

export default function PDP({ slug }: { slug: string }) {
  const work = getWorkById(slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef(0);

  if (!work) {
    notFound();
  }

  // Use images array if available, otherwise use single image
  const images = work.images && work.images.length > 0 ? work.images : [work.image];

  const handleBack = () => {
    redirect('/');
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNextImage();
      } else {
        goToPrevImage();
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-mono">
      <Header isBackVisible={true} onBack={handleBack} />
      <main className="flex flex-col flex-grow">
        {/* Image section */}
        <div className="flex-1 flex items-center justify-center pt-[20px]">
          <div
            className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center p-4 relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center w-full"
            >
              <ProductImage
                product={{ ...work, image: images[currentImageIndex] }}
                maxWidth="80%"
                maxHeight="400px"
                className="w-auto"
              />
            </motion.div>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition"
                >
                  ←
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition"
                >
                  →
                </button>
              </>
            )}

            {/* Image index indicator */}
            {images.length > 1 && (
              <div className="mt-4 text-center text-sm text-gray-600">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>

        {/* Description and buttons section at the bottom */}
        <motion.div
          className="w-full max-w-2xl mx-auto px-4 py-8 border-t"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {/* Description section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{work.name}</h2>
            {work.description && (
              <p className="text-gray-700 leading-relaxed mb-6">
                {work.description}
              </p>
            )}
          </div>

          {/* Buttons section */}
          <div className="flex gap-4 justify-center pb-4">
            {work.github && (
              <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            )}
            {work.otherLink && (
              <a
                href={work.otherLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-black text-black font-semibold hover:bg-black hover:text-white transition"
              >
                View Project
              </a>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
