
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Calendar, User, MenuIcon } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-20">
        <div className="text-2xl font-display font-bold text-club-light">
          DaMove
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {["Events", "VIP Tables", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-club-light hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <Button className="neon-button border-primary text-primary hover:bg-primary">
            Book Now
          </Button>
        </div>
        <button className="md:hidden text-club-light">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
        poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
      >
        <source src="/club-atmosphere.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-club-black via-club-black/80 to-transparent" />
    </div>
    
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-club-light animate-neon-glow">
          EXPERIENCE THE NIGHT
        </h1>
        <p className="text-xl md:text-2xl text-club-muted max-w-2xl mx-auto">
          Where music meets luxury. Join us for an unforgettable night.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <Button className="neon-button border-primary text-primary hover:bg-primary w-full md:w-auto">
            Book VIP Table
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
            View Events
          </Button>
        </div>
      </motion.div>
    </div>
  </div>
);

const Features = () => (
  <div className="py-24 bg-club-black">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Music,
            title: "World-Class DJs",
            description: "Experience sets from international artists",
          },
          {
            icon: Calendar,
            title: "Regular Events",
            description: "Weekly themed nights and special performances",
          },
          {
            icon: User,
            title: "VIP Experience",
            description: "Exclusive tables and premium bottle service",
          },
        ].map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-morphism p-6 rounded-xl text-center"
          >
            <feature.icon className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-display font-bold mb-2">
              {feature.title}
            </h3>
            <p className="text-club-muted">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="bg-club-black min-h-screen">
      <Navigation />
      <Hero />
      <Features />
    </div>
  );
};

export default Index;
