"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { id: 1, src: "/gallery1.jpg" },
  { id: 2, src: "/gallery2.jpg" },
  { id: 3, src: "/gallery3.jpg" },
  { id: 4, src: "/gallery4.jpg" },
  { id: 5, src: "/gallery5.jpg" },
  { id: 6, src: "/gallery6.jpg" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-club-black">
      <Navigation />
      <div className="pt-32 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-display font-bold text-club-light text-center mb-8">
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <motion.img
              key={image.id}
              src={image.src}
              alt={`Gallery Image ${image.id}`}
              className="rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleImageClick(image.id)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative"
          >
            <img
              src={images.find((img) => img.id === selectedImage)?.src}
              alt="Full Size Image"
              className="rounded-lg max-w-screen-md max-h-screen-md"
            />
            <button
              className="absolute top-4 right-4 text-club-light hover:text-primary"
              onClick={handleClose}
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
