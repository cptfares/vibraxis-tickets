
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Calendar, User, MenuIcon, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
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
      
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-club-light animate-neon-glow">
            EXPERIENCE THE NIGHT
          </h1>
          <p className="text-xl md:text-2xl text-club-muted max-w-2xl mx-auto">
            Where music meets luxury. Join us for an unforgettable night.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="neon-button border-primary text-primary hover:bg-primary w-full md:w-auto text-lg">
                Book VIP Table
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="w-full md:w-auto text-lg">
                View Events
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8 text-club-light opacity-50" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Music,
      title: "World-Class DJs",
      description: "Experience sets from international artists",
      gradient: "from-[#FF1CF7] to-[#b249f8]",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Weekly themed nights and special performances",
      gradient: "from-[#5EA2EF] to-[#0072F5]",
    },
    {
      icon: User,
      title: "VIP Experience",
      description: "Exclusive tables and premium bottle service",
      gradient: "from-[#FF4D4D] to-[#F9CB28]",
    },
  ];

  return (
    <div className="py-24 bg-club-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-morphism p-6 rounded-xl text-center relative group"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.gradient} rounded-xl transition-opacity duration-300`} />
              <feature.icon className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-display font-bold mb-2 text-club-light">
                {feature.title}
              </h3>
              <p className="text-club-muted">{feature.description}</p>
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HighlightSection = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100k+", label: "Happy Customers" },
    { value: "500+", label: "Events Hosted" },
    { value: "50+", label: "International DJs" },
  ];

  return (
    <div className="py-24 bg-club-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h4
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.h4>
              <p className="text-club-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="bg-club-black min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HighlightSection />
    </div>
  );
};

export default Index;
