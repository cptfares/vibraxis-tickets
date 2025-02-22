
"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    alt: "Club atmosphere",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    alt: "Event night",
  },
  // Add more images here
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-club-black">
      <Navigation />
      <div className="pt-32 pb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-display font-bold text-club-light mb-4">
            Gallery
          </h1>
          <p className="text-club-muted max-w-2xl mx-auto">
            Explore our vibrant nightlife through our photo gallery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={images.find((img) => img.id === selectedImage)?.src}
              alt={images.find((img) => img.id === selectedImage)?.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
